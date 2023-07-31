import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {DepositComponent} from "../deposit/deposit.component";
import {raceInit} from "rxjs/internal/observable/race";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  balance: string = '0';
  modalRef: MdbModalRef<DepositComponent> | null = null;
  constructor(protected router: Router,
              protected userService: UserService,
              protected toastr: ToastrService,
              private modalService:MdbModalService) {}


  goToLogin() {
    this.router.navigateByUrl('login');
  }

  goToRegister() {
    this.router.navigateByUrl('register');
  }

  openModal() {
    this.modalRef = this.modalService.open(DepositComponent)
  }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.userService.getBalance().subscribe({
        next: value => this.balance = value.message,
        error: err => this.toastr.error('Error fetching balance...')
      })
    }
  }

  protected readonly raceInit = raceInit;
}
