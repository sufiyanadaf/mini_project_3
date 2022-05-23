import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
   email: any;
   password: any;
   mail:any;
   pass:any;
   array:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl("",[Validators.required]),
      'password': new FormControl ("", [Validators.required])
    })
  }

  login(){
    if(this.email== this.mail && this.password== this.pass){
      this.router.navigate(['/dashboard'])
      }else{
         alert('Invalid Username & password')
      }
  }
}
