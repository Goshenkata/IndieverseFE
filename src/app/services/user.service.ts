import { Injectable } from '@angular/core';
import {RegisterStage} from "../enums/RegisterStage";
import {RegistrationRequest} from "../models/RegistrationRequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtResponse} from "../models/JwtResponse";
import {SimpleMessage} from "../models/SimpleMessage";
import {LoginRequest} from "../models/LoginRequest";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public registerStage: RegisterStage = RegisterStage.USERDATA;
  public registrationRequest: RegistrationRequest = {addressData: {}}
  private options = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token')
    return token != null;
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.router.navigateByUrl('/')
  }

  register():Observable<JwtResponse> {
    return this.http.post<JwtResponse>('http://localhost:8080/user/register',this.registrationRequest, this.options);
  }

  registerCheck(): Observable<SimpleMessage> {
    const url = 'http://localhost:8080/user/register/check';
    return this.http.post<SimpleMessage>(url, this.registrationRequest, this.options);
  }

  login(loginData: LoginRequest) {
    return this.http.post<JwtResponse>('http://localhost:8080/user/login',loginData, this.options);
  }
}
