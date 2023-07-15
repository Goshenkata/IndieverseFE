import {Component} from '@angular/core';
import {RegisterStage} from "../../enums/RegisterStage";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  constructor(protected userService: UserService) {
  }


  protected readonly RegisterStage = RegisterStage;
}
