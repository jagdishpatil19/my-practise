import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent {
  @Input() item:any;
   myName:string="jagdish"

   //data transformation....  parent to  child
   @Input() parentDataRecive:any;

   //child data transfor in parent componant 

    @Output()  data =new EventEmitter <any>
    @Output()  kayPan=new EventEmitter<any>
    childToParent:any='this is child data'
name:any='this is a kaypan'
    childTransforToParent(){
      this.data.emit(this.childToParent)
      this.kayPan.emit(this.name)
    }

}
