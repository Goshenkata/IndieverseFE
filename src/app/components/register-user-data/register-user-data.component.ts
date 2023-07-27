import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {RegisterStage} from "../../enums/RegisterStage";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register-user-data',
  templateUrl: './register-user-data.component.html',
  styleUrls: ['./register-user-data.component.scss']
})
export class RegisterUserDataComponent {
  constructor(protected userService: UserService, public toastr: ToastrService) {
  }

  @ViewChild('f') form!: NgForm

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.userService.registrationRequest = {...data}
      this.userService.registerCheck().subscribe({
        next: () => {
          this.userService.registerStage = RegisterStage.ADRESSDATA
        },
        error: err => {
          this.toastr.error(err.error.message)
        }
      })
    }
  }
}
