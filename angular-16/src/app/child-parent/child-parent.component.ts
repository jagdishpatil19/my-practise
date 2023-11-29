import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent {
  @Input() item=0
  myName:string="jagdish"
}
