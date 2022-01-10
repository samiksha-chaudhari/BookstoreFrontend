import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './Authguard/authguard.guard';
import { BookviewComponent } from './Components/bookview/bookview.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllBookComponent } from './Components/get-all-book/get-all-book.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { GetorderComponent } from './Components/getOrder/getorder/getorder.component';
import { GetwishlistComponent } from './Components/getwishlist/getwishlist.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { PlaceorderComponent } from './Components/placeorder/placeorder.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},  
  {path:'homepage',component:HomepageComponent,canActivate:[AuthguardGuard],
   children:[
    {path:'',redirectTo:"getAllBooks",pathMatch:'full'},
  {path:'wishlist',component:GetwishlistComponent},
  {path:'cart',component:GetcartComponent},
  {path:'bookview',component:BookviewComponent},
  {path:'getAllBooks',component:GetAllBookComponent},
  {path:'profile',component:ProfileComponent},
  {path:'placeorder',component:PlaceorderComponent},
  {path:'getorder',component:GetorderComponent}
   ]
},
// {path:'wishlist',component:GetwishlistComponent},
//   {path:'order',component:GetcartComponent},
//   {path:'bookview',component:BookviewComponent},
//   {path:'getAllBooks',component:GetAllBookComponent}

 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
