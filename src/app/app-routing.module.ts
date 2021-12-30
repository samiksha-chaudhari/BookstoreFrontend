import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { GetwishlistComponent } from './Components/getwishlist/getwishlist.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'profile',component:ProfileComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'wishlist',component:GetwishlistComponent},
  {path:'order',component:GetcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
