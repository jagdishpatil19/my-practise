import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
constructor(private router:Router){}
  login(){
this.router.navigateByUrl("login")
  }

  sms:any;
  submit(value:any){
if(value==30){
  this.router.navigateByUrl('ifElse')
}
   else if(value==''){
  this.sms="plise enter number"
  setTimeout(()=>{
 this.sms=''
  },2000)
 }
else{
  this.sms="plise enter valide number"
  setTimeout(()=>{
    this.sms=''
     },2000)
}
  }
  ifElse(){
    this.router.navigateByUrl('ifElse')
  }
  loop(){
    this.router.navigateByUrl('loop')
  }
  style(){
    this.router.navigateByUrl('styleBinding')
  }
  form(){
    this.router.navigateByUrl('loginForm')
  }
  toggle(){
    this.router.navigateByUrl('toggle')
  }
  todo(){
    this.router.navigateByUrl('todoList')
  }

  child:any='10'
  update(){
    this.child=Math.floor(Math.random()*10)+2
  }
  pipes(){
    this.router.navigateByUrl('pipes')
  }
  newForm(){
    this.router.navigateByUrl('newForm')
  }
}
