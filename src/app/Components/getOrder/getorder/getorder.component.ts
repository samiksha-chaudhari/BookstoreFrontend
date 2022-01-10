import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookServices/book.service';

@Component({
  selector: 'app-getorder',
  templateUrl: './getorder.component.html',
  styleUrls: ['./getorder.component.scss']
})
export class GetorderComponent implements OnInit {
  cartList: any = [];
  cartlistcount: any;


  constructor(private router:Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.getcartitems();
  }

  getcartitems() {
    this.bookService.getCartItemsService().subscribe((response: any) => {
      console.log(response);
      this.cartList = response.data
      this.cartList.reverse()
      this.cartlistcount = response.data.length
      console.log("CARTLIST=====>", this.cartList);
    })
  }

  onhome() {
    this.router.navigateByUrl('/homepage')
  }

}
