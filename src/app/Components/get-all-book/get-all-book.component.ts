import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookServices/book.service';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  BookList: any = [];
  BookCount: any
  book: any 
  selected = 'option2';
  toggle = true;
  status = 'Enable';
  cartList: any;
  cartlistcount: any;
  page: number = 1;
  totallength:any

  constructor(private bookService: BookService, private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
   
    this.bookService.getallBookService().subscribe((response: any) => {
      console.log(response);
      this.BookList = response.data;
      this.totallength=response.data.length
      this.BookCount = response.data.length;
      console.log("BookList======>",this.BookList);
      console.log(this.BookCount);
      
    },error=>{console.log(error);
    })
  }

  onquickview(book: any) {
    localStorage.setItem('bookId', book.bookId);
    console.log("id", book.bookId);
    this.router.navigateByUrl('/homepage/bookview')
  }

  sortlowtohigh() {
    this.BookList.sort((a: any, b: any) => a.price - (b.price));
  }
  sorthightolow() {
    this.BookList.sort((a: any, b: any) => b.price - (a.price));
  }

  newestarrivalse() {
    this.BookList.reverse()
  }


  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  addtowishlist(book:any) {
    let reqData = {
      userId: 5,
      bookId: book.bookId    
    }
    this.bookService.addtoWishlistService(reqData).subscribe((response:any)=>{
      console.log(response);
      this.snackBar.open("Item added to Wishlist", '', {
        duration: 2000
      })   
    }, error => {
      console.log(error);
    })

  }

  addtocart(book:any){
    let reqData = {
      userId: 5,
      bookId: book.bookId,
      quantity: 1      
    }
    this.bookService.addtoCartService(reqData).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open("Item added to Cart", '', {
        duration: 2000
      })   
    }, error => {
      console.log(error);
    })
  }


 
}
