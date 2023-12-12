import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

parentToChild:any='this is prent data'
childData=""

childInPrent(item:any){
 
  this.childData=item
}

asschData:any;
assch(value:any){
  this.asschData=value
}
}
