import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
 
  constructor(private formBuilder: FormBuilder, private router: Router,private userservice: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      service: ['advance']
    });
  }

  onLogin() {
    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      
        console.log("valid");
        console.log("User");
        this.userservice.loginUserService(reqData).subscribe((result: any) => 
        {
          console.log(result);
          localStorage.setItem('token', result.result.accessToken);
          this.snackBar.open("Login Successfull", '', {
            duration: 2000,
            panelClass: ['brown-snackbar']
          })
          this.router.navigateByUrl('/homepage/getAllBooks')    
    
        }, 
        error => {
          console.log(error);
          this.snackBar.open("Enter Valid Data", '', {
            duration: 2000,
            panelClass: ['brown-snackbar']
          })

        })
    }
  }

  onSignup() {
    this.submitted = true
    let reqData = {
      service: this.signupForm.value.service,
      userName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      phoneNo: this.signupForm.value.mobileNumber
    }
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      
        console.log("user");
        console.log("valid");
        this.userservice.registerUserService(reqData).subscribe((response: any) => {
          console.log(response);
        }, error => {
          console.log(error);
        });
        
    }
    else {
      console.log("invalid");

    }
  }
}



