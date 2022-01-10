import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookServices/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  edituseraddressform!: FormGroup;
  cartList: any = [];
  cartlistcount: any;
  item_qty = 1;
  data: any
  step = 0;
  disableTextbox = true
  orderList: any = [];

  constructor(private bookService: BookService, private router: Router, private formBuilder: FormBuilder, private userservice: UserService, private snackBar: MatSnackBar,private dataservice:DataService) { }
  @Output() getcarttohomepage = new EventEmitter<string>();

  ngOnInit(): void {
    this.edituseraddressform = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],

      service: ['advance']
    });

    this.getcartitems();
  }

  getcartitems() {
    this.bookService.getCartItemsService().subscribe((response: any) => {
      console.log(response);
      this.cartList = response.data
      this.cartList.reverse()
      this.cartlistcount = response.data.length
      console.log("CARTLIST=====>", this.cartList);
      this.dataservice.changeMessage(this.cartlistcount)
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onhome() {
    this.router.navigateByUrl('/homepage')
  }

  onPlaceOrder() {
    this.router.navigateByUrl('/homepage/placeorder')
  }

  onCheckout() {
    this.router.navigateByUrl('homepage/getorder')
  }

}
