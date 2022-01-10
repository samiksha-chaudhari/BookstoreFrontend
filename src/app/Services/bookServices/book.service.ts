import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any

  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem('token')
  }

  getallBookService() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.getService('/GetAllBooks', false, headers)
  }

  addtoCartService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService('/AddToCart', reqData, false, headers)
  }

  addtoWishlistService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService('/AddToWishList', reqData, false, headers)
  }

  getWishlistService() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.getService('/getwishlist?userId=5', false, headers)
  }


  deleteWishlistService(WishlistId:any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.deleteService('/DeleteWishlist/'+ WishlistId + '=', null, false, headers)
  }


  getCartItemsService() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.getService('/GetCart?userId=5', false, headers)
  }


}
