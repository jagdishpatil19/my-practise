import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
name:string=''
newName:string=''
fullName(value:string){
this.newName=value
}
 
fname:string=''
myName(val:string){
this.fname=val
}
}
