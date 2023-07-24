import { Injectable } from '@angular/core';
import {RegisterStage} from "../enums/RegisterStage";
import {RegistrationRequest} from "../models/RegistrationRequest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public registerStage: RegisterStage = RegisterStage.CASH;
  public registrationRequest!: RegistrationRequest;
  isLoggedIn(): boolean {
    return false
  }
  constructor() { }
}
