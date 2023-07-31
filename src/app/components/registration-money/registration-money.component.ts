import {Component, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";
import {RegisterStage} from "../../enums/RegisterStage";
import {JwtResponse} from "../../models/JwtResponse";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-registration-money',
  templateUrl: './registration-money.component.html',
  styleUrls: ['./registration-money.component.scss']
})
export class RegistrationMoneyComponent {

  constructor(protected userService: UserService, private router: Router, private toastr: ToastrService) {
  }

  @ViewChild('f') form!: NgForm

  submit() {
    this.userService.registrationRequest.money = Number(this.form.controls['money'].value);
    this.userService.register().subscribe({
      next: (value) => {
        localStorage.setItem('username', value.username);
        localStorage.setItem('token', value.token);
      },
      error: err => {
        this.toastr.error(err.error.message);
      },
      complete: () => {
        this.router.navigateByUrl('/').then(r => location.reload());
      }
    })
  }

}
