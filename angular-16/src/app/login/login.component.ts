import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  title:string="loding......."
  constructor(){
     setTimeout(()=>{
      this.title="login page"

     },2000)
  }
changetitle(){
  this.title="changed"
}
 
}
