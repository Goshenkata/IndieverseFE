import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {PublishComponent} from "./pages/publish/publish.component";
import {AuthGuard} from "./guards/auth.guard";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MygamesComponent} from "./pages/mygames/mygames.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'publish', component: PublishComponent, canActivate: [AuthGuard]},
  {path: 'mygames', component: MygamesComponent, canActivate: [AuthGuard]},
  {path: 'user/:username', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
