import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
   registrationForm:any;
   value : any= 'VALID'
   fname:any;
   mail:any;
   pass:any;
   lname:any;
   country_code:any;
   phone:any;
   confirm_pass:any;
   add:any;
   
    array: any= [] ;
  constructor(private router:Router) { }


  ngOnInit(): void {
       for(var i=0; i< this.array.length; i++){
          console.log(this.array[i])
       }


    this.registrationForm = new FormGroup({
      'firstname':new FormControl("",[Validators.required, Validators.minLength(5)]),
      'lastname':new FormControl("",[Validators.required, Validators.minLength(5)]),
      'email':new FormControl("",[Validators.required, Validators.email]),
      'phone_country_code':new FormControl("",[Validators.required]),
      'phone_number':new FormControl("",[Validators.required]),
      'password':new FormControl("",[Validators.required]),
      'confirm_password':new FormControl("",[Validators.required]),
      'address':new FormControl("",[Validators.required])
    })
  }
    get firstname(){
      return this.registrationForm.get('firstname')
    }
    get lastname(){
      return this.registrationForm.get('lastname')
    }
    get email(){
      return this.registrationForm.get('email')
    }
    get phone_country_code(){
      return this.registrationForm.get('phone_country_code')
    }
    get phone_number(){
      return this.registrationForm.get('phone_number')
    }
    get password(){
      return this.registrationForm.get('password')
    }
    get confirm_password(){
      return this.registrationForm.get('confirm_password')
    }
    get address(){
      return this.registrationForm.get('address')
    }


  submitForm(){
    {
   if(this.registrationForm.status == this.value){
    console.log(this.registrationForm)
    localStorage.setItem('firstname', this.registrationForm.value.firstname)
    localStorage.setItem('lastname', this.registrationForm.value.lastname)
    localStorage.setItem('email', this.registrationForm.value.email)
    localStorage.setItem('phone_country_code', this.registrationForm.value.phone_country_code)
    localStorage.setItem('phone_number', this.registrationForm.value.phone_number)
    localStorage.setItem('password', this.registrationForm.value.password)
    localStorage.setItem('confirm_password', this.registrationForm.value.confirm_password)
    localStorage.setItem('address', this.registrationForm.value.address)
      this.fname=localStorage.getItem('firstname')
      this.lname=localStorage.getItem('lastname')
      this.mail=localStorage.getItem('email')
      this.country_code=localStorage.getItem('phone_country_code')
      this. phone=localStorage.getItem('phone_number')
      this. pass=localStorage.getItem('password')
      this. confirm_pass=localStorage.getItem('confirm_password')
      this. add=localStorage.getItem('address')
      this.array.push({'firstname':this.fname},{'lastname':this.lname},{'email':this.mail},
                      {'phone_country_code': this.country_code},{'phone_number':this.phone},
                      {'passwors':this.pass},{'confirm_password':this.confirm_pass},
                      {'address':this.add})
      console.log(this.array)
      this.router.navigate(['/login'])

   }else{
     window.alert('Invalid Registration form')
   }
    }

}
}