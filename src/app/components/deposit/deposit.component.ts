import {Component, ViewChild} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  @ViewChild('f') form!: NgForm
  constructor(
    public userService: UserService,
    public toastr:ToastrService,
    public modalRef?: MdbModalRef<DepositComponent>
    ) {
  }

  deposit() {
    let money = Number(this.form.controls['money'].value);
    this.userService.deposit(money).subscribe({
      next: value => this.toastr.success(value.message),
      error: err => this.toastr.error(err.error.message),
      complete: () => {
        this.modalRef?.close();
        location.reload();
      }
    })
  }
}
