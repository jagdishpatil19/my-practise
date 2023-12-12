import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-other-practise',
  templateUrl: './other-practise.component.html',
  styleUrls: ['./other-practise.component.css']
})
export class OtherPractiseComponent {

  num1:number=0
  additon(){
    this.num1++
  }
  substraction(){
    this.num1--
  }


  myName:any='jagdish pundlik patil'
  constructor(private std:StudentService) {}
  ngOnInit(){
    this.std.fullName=this.myName
  }
}
