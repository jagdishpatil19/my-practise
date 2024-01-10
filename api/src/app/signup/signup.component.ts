
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signup!:FormGroup
constructor(private formBuilder:FormBuilder,private apiCallSerice:ApiCallService){}
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
submit(){
    let endPoint="user"
   console.log(this.signup.value)
   this.apiCallSerice.postApi(endPoint,this.signup.value).subscribe(result=>{
    console.log(result)
   })
    
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
