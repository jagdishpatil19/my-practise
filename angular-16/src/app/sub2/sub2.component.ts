import { Component, Input } from '@angular/core';
import { StudentService } from '../services/student.service';
 

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component {
   @Input() reciveData=''

   constructor(private std:StudentService){}
subjectData:any;
 ngOnInit(){
  this.std.userName.subscribe(data=>{
 
    this.subjectData=data
  }) 
 }
}
