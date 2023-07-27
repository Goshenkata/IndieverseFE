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
  filteredItems: CountryDropdownItem[] = countries;

  constructor(protected userService: UserService) {

  }

  submit() {

    const data = this.form.value
    if (this.form.valid && this.countryIsValid(data.country)) {
      this.userService.registrationRequest.addressData = {
        address: data.address,
        country: data.country,
        city: data.city
      }
      this.userService.registerStage = RegisterStage.CASH;
    }
  }

  searchItems() {
    const options: Fuse.IFuseOptions<CountryDropdownItem> = {
      keys: ["name"],
      threshold: 0.3
    }
    const fuse = new Fuse(countries, options);
    this.filteredItems = fuse.search(this.form.controls['country'].value).map(value => value.item);
  }

  onCountrySelected(country: CountryDropdownItem) {
    this.form.controls['country'].setValue(country.name)
  }

  countryIsValid(country: string): boolean {
    const arr = countries.map(value => value.name);
    return arr.includes(country);
  }
}
