import { Component } from '@angular/core';
import{FormControl , FormControlName, FormGroup ,Validator, Validators}from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
loginform=new FormGroup({
 user:new FormControl('',[Validators.required ,Validators.email]),
 password:new FormControl('',[Validators.required]) 

})
userLogin(){
  console.log(this.loginform.value)
}

get user(){
  return this.loginform.get('user')
}

get password(){
  return this.loginform.get('password')
}




}


