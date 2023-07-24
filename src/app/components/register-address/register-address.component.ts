import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RegisterStage} from "../../enums/RegisterStage";
import {UserService} from "../../services/user.service";
import {CountryDropdownItem} from "../../models/CountryDropdownItem";
import {countries} from "./countries";
import Fuse from "fuse.js";

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.scss']
})
export class RegisterAddressComponent {
  @ViewChild('f') form!: NgForm
  @ViewChild('search') search!: ElementRef;
  filteredItems: CountryDropdownItem[] = countries;

  constructor(protected userService: UserService) {

  }

  submit() {

    if (this.form.valid && this.countryIsValid(this.form.value.country)) {
      this.userService.registerStage = RegisterStage.CASH;
      this.userService.registrationRequest.addressData = {...this.form.value}
    }
  }

  searchItems() {
    const options: Fuse.IFuseOptions<CountryDropdownItem> = {
      keys: ["name"],
      threshold: 0.3
    }
    const fuse = new Fuse(countries, options);
    this.filteredItems = fuse.search(this.search.nativeElement.value).map(value => value.item);
  }

  onCountrySelected(country: CountryDropdownItem) {
    this.search.nativeElement.value = country.name;
  }

  countryIsValid(country:string): boolean {
    return countries.map(value => value.name).includes(country);
  }
}
