import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
   
  user:any;
  userData:any={}
  getData(data:any){
this.userData=data
  }
}
