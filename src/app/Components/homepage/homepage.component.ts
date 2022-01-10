import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  value = '';
  sentmsg: any;
  subscription: any;
  count: any;
  message: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onWishList() {
    this.router.navigateByUrl('/homepage/wishlist')
  }

  onOrder() {
    this.router.navigateByUrl('homepage/getorder')
  }

  oncart(){
    this.router.navigateByUrl('/homepage/cart')
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  onprofile(){
    this.router.navigateByUrl('/homepage/profile')
  }

}
