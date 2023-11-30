import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
display:boolean=false
btn:string='show'

hideShow(value:boolean){
this.display=!this.display
if(value==true){
this.btn="show"
}
else{
  this.btn='hide'
}
}
}
