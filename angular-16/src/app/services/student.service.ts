import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  studantData(){

    return[
      {name:'jagdish',age:23,class:'Bsc'},
      {name:'shri',age:22,class:'B.com'},
      {name:'sham',age:23,class:'Bsc'},
      {name:'kishor',age:24,class:'diploma'}
    ]
  }
}
