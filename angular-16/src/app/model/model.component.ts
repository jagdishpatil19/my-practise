import { Component } from '@angular/core';

interface dataType{
  name:string,
  id:number,
  indian:Boolean,
  address:any
}
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {


information:dataType={
  name:'jagdish' , id:23 ,indian:true ,address:"hjhahiuiu"

}

}
