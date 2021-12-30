import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {
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
