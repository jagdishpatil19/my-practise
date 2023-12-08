import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APICallService {

  url="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }

  getData(){
return this.http.get(this.url)
  

  }
  postData(postData:any){
return this.http.post(this.url,postData)
  

  }
}
