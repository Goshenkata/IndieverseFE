import { Injectable } from '@angular/core';
import {RegisterStage} from "../enums/RegisterStage";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public registerStage: RegisterStage = RegisterStage.USERDATA;
  isLoggedIn(): boolean {
    return false
  }
  constructor() { }
}
