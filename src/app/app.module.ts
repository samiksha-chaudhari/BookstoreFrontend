import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfileComponent } from './Components/profile/profile.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import {MatMenuModule} from '@angular/material/menu';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { GetwishlistComponent } from './Components/getwishlist/getwishlist.component';
import { BookviewComponent } from './Components/bookview/bookview.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { GetAllBookComponent } from './Components/get-all-book/get-all-book.component';
import { AuthguardServiceService } from './Services/AuthguardServices/authguard-service.service';
import { FooterComponent } from './Components/footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { PlaceorderComponent } from './Components/placeorder/placeorder.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { GetorderComponent } from './Components/getOrder/getorder/getorder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    HomepageComponent,
    GetcartComponent,
    GetwishlistComponent,
    BookviewComponent,
    GetAllBookComponent,
    FooterComponent,
    PlaceorderComponent,
    GetorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,MatExpansionModule,MatRadioModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
