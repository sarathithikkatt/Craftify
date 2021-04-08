import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AllComponent } from './all/all.component';
import { DrawingComponent } from './drawing/drawing.component';
import { DiyComponent } from './diy/diy.component';
import { WoodworkComponent } from './woodwork/woodwork.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    FooterComponent,
    TutorialsComponent,
    AllComponent,
    DrawingComponent,
    DiyComponent,
    WoodworkComponent,
    SignupComponent,
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
