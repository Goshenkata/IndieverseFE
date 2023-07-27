import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {LoginRequest} from "../../models/LoginRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(protected userService: UserService, private toastr: ToastrService, private router: Router) {
  }

  @ViewChild('f') form!: NgForm

  submit(loginData: LoginRequest) {
    if (this.form.valid) {
      this.userService.login(loginData)
        .subscribe({
          next: (value) => {
            localStorage.setItem('username', value.username);
            localStorage.setItem('token', value.token);
          },
          error: err => {
            this.toastr.error('Invalid username or password');
          },
          complete: () => {
            this.router.navigateByUrl('/');
          }
        })
    }
  }
}
