import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value:number, ...args: number[]): unknown {
    const [x]=args
    return value*x
   
  }

}
