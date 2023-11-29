import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  taskList:any=[]
  addTask(item:any){
    this.taskList.push({id:this.taskList.lenght,name:item})
     
  }

 
}
