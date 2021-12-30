import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  disableTextbox =  true;
  savebutton :boolean=false
  cancelbutton:boolean=false
  editbutton:boolean=true

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleDisable() {
    this.editbutton=false
    this.cancelbutton=true
    this.savebutton=true
    this.disableTextbox = !this.disableTextbox;
  }

  oncancel(){
    this.cancelbutton=false
    this.editbutton=true
    this.savebutton=false
    this.disableTextbox = !this.disableTextbox;
  }
  onhome() {
    this.router.navigateByUrl('/homepage')
  }

}
