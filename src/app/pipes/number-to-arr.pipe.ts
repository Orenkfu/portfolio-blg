import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArr'
})
export class NumberToArrPipe implements PipeTransform {

  transform(num: number): any {
    return Array(num).fill(0).map( (v, i) =>i);
  }

}
