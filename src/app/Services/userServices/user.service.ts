import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any

  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem('token')
  }

  registerUserService(reqPayload: any) {
    console.log(reqPayload);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })

    }
    //return this.httpService.postService('/bookstore_user/registration', reqPayload, true, headers)
    return this.httpService.postService('/register', reqPayload, true, headers)
  }

  loginUserService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization: this.token
      })
    }
    //return this.httpService.postService('/bookstore_user/login', reqData, true, headers)
    return this.httpService.postService('/login', reqData, true, headers)
  }
}
