import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookServices/book.service';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {
  data:any
  wishList: any
  wishListCount: any

  constructor(private router:Router, private bookService: BookService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist() {
    this.bookService.getWishlistService().subscribe((response: any) => {
      console.log(response);
      this.wishList = response.data
      this.wishListCount = response.data.length
      this.wishList.reverse()
      console.log(this.wishListCount);
    })
  }

  deleteWishlistItem(book:any) {
    this.bookService.deleteWishlistService(book.WishlistId).subscribe((response:any)=>{
      console.log(response);
            this.snackBar.open("Item Removed From Wishlist", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })
      this.getWishlist();
      
    })

  }
  
  onhome() {
    this.router.navigateByUrl('/homepage')
  }

}
