import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  data:any
  wishList: any
  wishListCount: any

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onhome() {
    this.router.navigateByUrl('/homepage')
  }

}
