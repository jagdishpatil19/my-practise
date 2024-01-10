import { Component } from '@angular/core';
import{FormBuilder, FormControl , FormControlName, FormGroup ,Validator, Validators}from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
 
  loginForm!:FormGroup

  constructor(private formbuilder:FormBuilder){}

  ngOnInit(){
    this.formLoad()
  }
 formLoad(){
  this.loginForm=this.formbuilder.group({
    // user:['',[Validators.required ,Validators.email]],
//  password: ['',[Validators.required]] ,
// city:['']
 
      user: [989898989,[Validators.maxLength(10)]],
       password:['',[Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),Validators.maxLength(10)],],
       confirmPassword:[''],
       
      city:["",[this.spacesNotAllowed]]
  })
 }
 

 userLogin(){

 }
 icons:any="bi bi-eye-slash"
inputType:any="password"

 showPassword(){
  if(this.icons=="bi bi-eye-slash"){
 this.icons="bi bi-eye"
 this.inputType="text"
  }
  else if(this.icons=="bi bi-eye"){
this.icons="bi bi-eye-slash"
this.inputType="password"
  }
 }
 cityData:any=''
 spacesNotAllowed(control:any){
  //  this.cityData=control.value
  const value=control.value
   console.log(value)
    
 }
 passMissMatch:boolean=false
checkPassword(){
let pass=this.loginForm.get('password')?.value
let confirmPass=this.loginForm.get('confirmPassword')?.value
 console.log(pass,"this is pass")
 console.log(confirmPass,"this is confirm pass")
 if(pass!==confirmPass){
  this.passMissMatch=true
 }
 else{
  this.passMissMatch=false
 }
}

}