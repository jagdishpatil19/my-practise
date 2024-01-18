import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
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
   this.array.push(".")
   this.number++
   this.color1=Math.floor(Math.random()*250)
   this.color2=Math.floor(Math.random()*250)
   this.color3=Math.floor(Math.random()*250)

   
   this.addColor = `#${this.color1.toString(16)}${this.color2.toString(16)}${this.color3.toString(16)}`;
  //  this.addColor='#'+(this.color1.toString(16))+(this.color2.toString(16))+(this.color3.toString(16))
   console.log(this.addColor)
   
}
remove(){
  this.array.pop()
  this.number--
}


arr:number[]=[2,3,34,4,2,2,4,45,]
 

arr2=this.arr.sort(this.compair)

compair(a:any,b:any){
  return a-b
}

dublicateArr:number[]=[1,2,3,2,4,5,6,4,7,9,9,7]

removeDuplicateItem=[...new Set(this.dublicateArr)]

}
