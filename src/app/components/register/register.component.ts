import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {RegisterStage} from "../../enums/RegisterStage";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('f') form!: NgForm

  constructor(protected userService: UserService) {
  }


  submit() {
    if (this.form.valid) {
      this.userService.registerStage = RegisterStage.ADRESSDATA
    }
  }
}
