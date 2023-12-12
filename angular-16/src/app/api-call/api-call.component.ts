import { Component } from '@angular/core';
import { APICallService } from '../services/api-call.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
  providers:[APICallService]
})
export class APICallComponent {
user:any;
constructor(private data:APICallService) {
  data.getData().subscribe((userdata)=>{
   console.log(userdata)
    this.user=userdata
  })
  
}

newUser:any;
submit(data:any){
 
  this.data.postData(data).subscribe((result)=>{
  console.log(result)
    this.newUser=result
  })
  
}

 

 

}
