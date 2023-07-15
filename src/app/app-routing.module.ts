import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
