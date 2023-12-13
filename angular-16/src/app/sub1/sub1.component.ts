import { Component, Input } from '@angular/core';
import { StudentService } from '../services/student.service';
 

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {
   
@Input() reciveData=''
 

constructor(private std:StudentService){}
subjectData:any;
 ngOnInit(){
  this.std.userName.subscribe(data=>{
 
    this.subjectData=data
  }) 
 }
  
 
 
}
