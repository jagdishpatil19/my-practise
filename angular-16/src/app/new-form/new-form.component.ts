import { Component } from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  inputData=''
userData(value:any){
console.log(value)
this.inputData=value

}
}
