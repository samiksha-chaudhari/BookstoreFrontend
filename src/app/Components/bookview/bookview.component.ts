import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/bookServices/book.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.scss']
})
export class BookviewComponent implements OnInit {
  bookId: any
  data: any
  item_qty = 1;
  addtocart: boolean = true;
  countbox: boolean = false;
  value: any
  feedback: any
  feedbackarray: any;
  fullName: any

  constructor(private bookService: BookService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    console.log(this.bookId);
    this.getbookdetail();
  }

  getbookdetail() {
    this.bookService.getallBookService().subscribe(
      (response: any) => {
        response.data.forEach((element: any) => {
          if (element.bookId == this.bookId) {
            this.data = element;
          }
        });
      },
      (error) => console.log(error)
    )
  }

}
