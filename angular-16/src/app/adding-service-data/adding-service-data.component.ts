import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-adding-service-data',
  templateUrl: './adding-service-data.component.html',
  styleUrls: ['./adding-service-data.component.css']
})
export class AddingServiceDataComponent {

  addData:any;
  constructor(private std:StudentService){}
  ngOnInit(){
    this.addData=this.std.fullName
  }
}
