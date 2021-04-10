import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllComponent } from './all/all.component';
import { DrawingComponent } from './drawing/drawing.component';
import { DiyComponent } from './diy/diy.component';
import { WoodworkComponent } from './woodwork/woodwork.component';
import { SignupComponent } from './signup/signup.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    AllComponent,
    DrawingComponent,
    DiyComponent,
    WoodworkComponent,
    SignupComponent,
    MarketplaceComponent,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
