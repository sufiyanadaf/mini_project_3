import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  send_Message:any;
  result: any;
  USD:any = "USD";
  CAD: any= "CAD";
  AUD: any = "AUD"
  EUR: any="EUR";
  CNY: any="CNY";
  NZD: any="NZD"


  constructor(private sharedService: SharedService, private router : Router) { }

  ngOnInit(): void {
    
  }
sendMessage(){
  this.sharedService.sendMessage(this.USD)
  this.sharedService.sendMessage(this.CAD)
  this.sharedService.sendMessage(this.AUD)
  this.sharedService.sendMessage(this.EUR)
  this.sharedService.sendMessage(this.CNY)
  this.sharedService.sendMessage(this.NZD)
  
}

}
