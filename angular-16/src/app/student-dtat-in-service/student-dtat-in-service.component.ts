import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-dtat-in-service',
  templateUrl: './student-dtat-in-service.component.html',
  styleUrls: ['./student-dtat-in-service.component.css'],
  providers: [ StudentService]
})
export class StudentDtatInServiceComponent {

  serviceData:any;
  constructor(private std:StudentService){

    this.serviceData=std.studantData()
    
  }
}
