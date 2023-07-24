import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {RegisterStage} from "../../enums/RegisterStage";

@Component({
  selector: 'app-register-user-data',
  templateUrl: './register-user-data.component.html',
  styleUrls: ['./register-user-data.component.scss']
})
export class RegisterUserDataComponent {
  constructor(protected userService: UserService) {
  }

  @ViewChild('f') form!: NgForm

  submit() {
    if (this.form.valid) {
      this.userService.registerStage = RegisterStage.ADRESSDATA
      this.userService.registrationRequest = {...this.form.value}
    }
  }
}
