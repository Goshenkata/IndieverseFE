import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeJumbotronComponent } from './components/home/home-jumbotron/home-jumbotron.component';
import { HomeInfoComponent } from './components/home/home-info/home-info.component';
import { CardComponent } from './components/home/card/card.component';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent} from "./pages/register/register.component";
import {FormsModule} from "@angular/forms";
import { RegisterUserDataComponent } from './components/register-user-data/register-user-data.component';
import { RegisterAddressComponent } from './components/register-address/register-address.component';
import { RegistrationMoneyComponent } from './components/registration-money/registration-money.component';
import { ToastrModule } from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./interceptors/JwtInterceptor";
import { GameComponent } from './components/game/game.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PublishComponent } from './pages/publish/publish.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { MygamesComponent } from './pages/mygames/mygames.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeJumbotronComponent,
    HomeInfoComponent,
    CardComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    RegisterUserDataComponent,
    RegisterAddressComponent,
    RegistrationMoneyComponent,
    GameComponent,
    LoadingComponent,
    PublishComponent,
    NotFoundComponent,
    DepositComponent,
    GamelistComponent,
    MygamesComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
