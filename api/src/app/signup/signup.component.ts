
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signup!:FormGroup
constructor(private formBuilder:FormBuilder){}
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
userData(){
   console.log(this.signup.value)
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
