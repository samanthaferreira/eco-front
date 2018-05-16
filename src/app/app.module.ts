import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// -- services
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { StoresService } from './services/stores.service';

// -- guards

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';


import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StoresPageComponent } from './pages/stores-page/stores-page.component';
import { StoreCreateComponent } from './pages/stores-create/stores-create.component';
import { StoresFormComponent } from './components/stores-form/stores-form.component';
import { StoresCardComponent } from './components/stores-card/stores-card.component';
import { ProfileComponent } from './pages/profile/profile.component';


// -- routes

const routes: Routes = [
 { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
 { path: 'login', component: LoginComponent, canActivate: [ RequireAnonGuardService ] },
 { path: 'signup',  component: SignupComponent, canActivate: [ RequireAnonGuardService ] },
 { path: 'stores',  component: StoresPageComponent, canActivate: [ RequireUserGuardService ] },
 { path: 'profile',  component: ProfileComponent, canActivate: [ RequireUserGuardService ] },
 { path: 'stores/create',  component: StoreCreateComponent, canActivate: [ RequireUserGuardService ] }
];

// don't forget to register the guards (and the AuthService) in the providers

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    StoresPageComponent,
    StoreCreateComponent,
    StoresFormComponent,
    StoresCardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    StoresService,
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
