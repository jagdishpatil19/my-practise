import { Component } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent {

 value:any=''
  submitValue(val:any){
this.value =val.value
  }
//  life cycle hooks

constructor(){
  console.log('constructor')
};

nhOnChanges(){
  console.log("ngOnChange")
};

// ngOnInit(){
//   console.log('ngOnInit')
// }


hide:boolean=true
destroy(){
  this.hide=false

}


}
