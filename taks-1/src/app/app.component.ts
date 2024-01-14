import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taks-1';

  test(){
    console.log(1+'2'+'2') //122
    console.log(1+ +'2'+'2')//32
    console.log(1+ -'1'+'2')//02
    console.log(1+ -'1'+'2')//02
    console.log( + 1 + '2'+'2')//122
    console.log(  +'3'+ + 1+ +'2')
    // console.log("A" -"B" +2)//error
  }
  circleShow:boolean=false
  
  array:string[]=[]
  number:number=0

  color:any= 'red'
  randomNumber:any=undefined 
  ngOnInit(){

  }

   color1:any=undefined
   color2:any=undefined
   color3:any=undefined
addColor:any=undefined
  add(){
  this.circleShow=true
  this.randomNumber=Math.floor(Math.random()*10)+1
   this.array.push("")
   this.number++
   this.color1=Math.floor(Math.random()*250)
   this.color2=Math.floor(Math.random()*250)
   this.color3=Math.floor(Math.random()*250)

   
   this.addColor = `#${this.color1.toString(16)}${this.color2.toString(16)}${this.color3.toString(16)}`;
 
   console.log(this.addColor)
   
}
remove(){
  this.array.pop()
  this.number--
}

 
}