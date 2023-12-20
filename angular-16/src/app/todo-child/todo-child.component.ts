import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css']
})
export class TodoChildComponent {

  @Input() getData=''
  task:any=["go to gym","reading somes books","playing a game","enjoy the life"]
  del:boolean=true
pushData(){
  this.task.push(this.getData)
this.del=true
}

delet(){
  this.del=false
}
}
