import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent {
@Input() myValue:any=""
}
