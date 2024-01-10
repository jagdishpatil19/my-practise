import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {


url=" http://localhost:3000"
  constructor(private httpClient:HttpClient) { }
  
// getApiCall(){
//   this.httpClient.get(this.url)
// }
postApi(endPoint:any ,formData:any){
  let url=this.url+ "/"+endPoint
return this.httpClient.post(url,formData)
}
}
