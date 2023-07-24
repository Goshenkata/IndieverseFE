import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {RegisterStage} from "../../enums/RegisterStage";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(protected userService: UserService) {
  }

  ngOnInit() {
  }


  protected readonly RegisterStage = RegisterStage;
}
