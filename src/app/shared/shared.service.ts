import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  adddisplayMessage: any;
 addr_message:any;
       
  constructor() { }
  sendMessage(s_message:any){
    if(s_message!== null && s_message!==undefined){
       this.adddisplayMessage = s_message
    }else{
      return
    }
    console.log(this.adddisplayMessage) 
 }
 

addrecieveMessage1(){
  return this.addr_message = this.adddisplayMessage
}
addrecieveMessage2(){
  return this.addr_message = this.adddisplayMessage
}
addrecieveMessage3(){
  return this.addr_message = this.adddisplayMessage
}
addrecieveMessage4(){
  return this.addr_message = this.adddisplayMessage
}
addrecieveMessage5(){
  return this.addr_message = this.adddisplayMessage
}
addrecieveMessage6(){
  return this.addr_message = this.adddisplayMessage
}



}


