import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllComponent } from './all/all.component';
import { DiyComponent } from './diy/diy.component';
import { DrawingComponent } from './drawing/drawing.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SignupComponent } from './signup/signup.component';
import { WoodworkComponent } from './woodwork/woodwork.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"feed",component:FeedComponent,
  children:[
    {path:"all",component:AllComponent},
    {path:"drawing",component:DrawingComponent},
    {path:"diy",component:DiyComponent},
    {path:"woodwork",component:WoodworkComponent}
  ]
  },
  {path:"login",component:LoginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"marketplace",component:MarketplaceComponent},
  {path:"login/signup",component:SignupComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
0