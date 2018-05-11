import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// -- services
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

// -- guards

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';


import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// -- routes

const routes: Routes = [
 { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
 { path: 'login', component: LoginComponent, canActivate: [ RequireAnonGuardService ] },
 { path: 'signup',  component: SignupComponent, canActivate: [ RequireAnonGuardService ] }
 // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },

];

// don't forget to register the guards (and the AuthService) in the providers

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
