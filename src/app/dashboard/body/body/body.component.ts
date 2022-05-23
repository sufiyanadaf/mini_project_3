import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  inputForm:any;
     addResult:any;
     result:any;
     input:any;
     output:any;
     usd:any= 77.82;
     cad: any= 60.71;
     aud:any = 55.04;
     eur:any= 82.30;
     cny:any=11.63;
     nzd:any= 50.10;
     
  constructor(private sharedService: SharedService,
    private router:Router) { }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
  'input': new FormControl("",[Validators.required, Validators.pattern(/^[0-9]|d*$/)])
    })
    this.addResult1 == this.sharedService.addrecieveMessage1();
    this.addResult2 == this.sharedService.addrecieveMessage2();
    this.addResult3 == this.sharedService.addrecieveMessage3();
    this.addResult4 == this.sharedService.addrecieveMessage4();
    this.addResult5 == this.sharedService.addrecieveMessage5();
    this.addResult6 == this.sharedService.addrecieveMessage6();
  
   // console.log(this.result)

  }
     submit(){
       if(this.result1 == "USD"){
         this.output = this.input*this.usd;
         console.log(this.output)
         console.log(this.input)
        }
        if(this.result2 == "CAD"){
          this.output = this.input*this.cad;
          console.log(this.output)
          console.log(this.input)
         }
         if(this.result3 == "AUD"){
          this.output = this.input*this.aud;
          console.log(this.output)
          console.log(this.input)
         }
         if(this.result4 == "EUR"){
          this.output = this.input*this.eur;
          console.log(this.output)
          console.log(this.input)
         }
         if(this.result5 == "CNY"){
          this.output = this.input*this.cny;
          console.log(this.output)
          console.log(this.input)
         }
         if(this.result6 == "NZD"){
          this.output = this.input*this.nzd;
          console.log(this.output)
          console.log(this.input)
         }
        
     }
}

