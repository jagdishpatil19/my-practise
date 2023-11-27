import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent {
names=['jagdish','shrinath','kishor','akshay','sham']
friendsDetles=[
  {name:"jagdish", moNo:89898720, age:11},
  {name:"shri", moNo:84498720, age:21},
  {name:"kishor", moNo:898334540, age:21},
  {name:"jsham", moNo:89898720, age:31}
]
arr=[
  {name:"jagdish", moNo:89898720, age:11,  socialAccount :['wp','fb,','google']},
  {name:"shri", moNo:84498720, age:21 , socialAccount :['telegram','fb,','google']},
  {name:"kishor", moNo:898334540, age:21 , socialAccount :['youtube','fb,','google']},
  {name:"jsham", moNo:89898720, age:31,  socialAccount :['gmail','fb,','google']}
]
}
