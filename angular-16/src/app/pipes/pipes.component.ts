import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
title='this is heading'

custom:any=20

studentData:any=[

  {name:'jagdish',age:22,phoneNo:292838378},
  {name:'sham',age:23,phoneNo: 22211128},
  {name:'kish',age:24,phoneNo: 44444378},
  {name:'shri',age:22,phoneNo:  43338378},
  {name:'ram',age:24,phoneNo:554338378},
  {name:'laksu',age:22,phoneNo:21434838378},
  {name:'rahul',age:25,phoneNo:254838378},

]
serachData:any=''

 
}
