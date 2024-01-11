
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signup!:FormGroup
constructor(private formBuilder:FormBuilder,private apiCallSerice:ApiCallService ,private router:Router){}
ngOnInit(){
this.formLoad()

}
formLoad(){
  this.signup=this.formBuilder.group({
    userName: [''],
    password: [''],
    MobileNo: [''],
  confirmPassword:['']

  })
  
}
confirmPasswordError:boolean=false

passwordCheck(){
  let pass=this.signup.get("password")?.value
  console.log(pass)
  let confirmpass=this.signup.get("confirmPassword")?.value

  if(pass!==confirmpass){
  this.confirmPasswordError=true
  }
  else{
    this.confirmPasswordError=false
  }
}
postApiResponse:any=""
//first way to post API

// submit(){
//     let endPoint="user"
//    console.log(this.signup.value)
//    this.apiCallSerice.postApi(endPoint,this.signup.value).subscribe(result=>{
//     console.log(result)
//    })
   

//second way to post API
   async submit(){
    let endPoint='user';
    console.log( this.signup.value);
   this.postApiResponse = await this.apiCallSerice.postApi(endPoint,this.signup.value).toPromise()
    


   if(this.postApiResponse?.id){
    this.router.navigateByUrl('home')
   }

   else{
    this.router.navigateByUrl("signUp")
   }
 
}
changeType='password'
icon='bi bi-eye-fill'
passwordHideShow(){
  if (this.icon==="bi bi-eye-fill"){
    this.changeType='text'
    this.icon="bi bi-eye-slash-fill"
  }
  else if (this.icon==="bi bi-eye-slash-fill"){
    this.changeType='password'
    this.icon="bi bi-eye-fill"
  }
}




}
