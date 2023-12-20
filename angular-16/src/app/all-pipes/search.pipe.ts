import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any,args:any): any {

  
    // return  value.filter((ele:any)=>{
    //   return ele.name. indexOf(args)>-1
    // })
    
  
    let text = args?.toLowerCase();
      console.log(text);
      return value.filter((ele:any)=>{
       return JSON.stringify(ele).toLowerCase().includes(text)
       })
     
  }


}