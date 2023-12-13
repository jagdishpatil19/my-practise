import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
   
  sub:any='erere'

 button(value:any){
this.sub=value
 
 
 }

 constructor(private std:StudentService){}
 subject:any='jagdish'
 
 ngOnInit(){

 }
 setData(){
 this.std.userName.next(this.subject)
 }

  
}
