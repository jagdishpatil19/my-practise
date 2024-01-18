import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() parentData:any;


//this is child to parent data send 
// @Output() data =new EventEmitter<any>

// childDAta='this is child data'
// childToParentDataSend(){

//   this.data.emit(this.childDAta)
// }
// @Output() data =new EventEmitter <any>
@Output() newData=new EventEmitter <any>()
ngOnInit(){
    this.childTransforToParent()
}
    childToParent:any='this is child data'
 
    childTransforToParent(){
      this.newData.emit(this.childToParent) 
       
    }

}
