import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent   {
@Input() myValue:any=''

constructor(){
  console.log('constructor')
};

ngOnChanges(){
  console.log("ngOnChange")

};

ngOnInit(){
  console.log('ngOnInit')
}

ngDoCheck(){
  console.log('ngDoCheck')
}

ngAfterContentInit(){
  console.log('ngAfterContentInit')
}

ngAfterContentChecked(){
  console.log('ngAfterContentChecked')
}

ngAfterViewInit(){
  console.log('ngAfterViewInit')
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked')
}

massage:string=''
ngOnDestroy(){
  console.log('ngOnDestroy')
  this.massage="this is hide"
}
}
