import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  
  parentDataSend:any="this is parent data"

  childDadaGet=''
  childInPrent(data:string){
this.childDadaGet=data
console.log(data)
  }
}
