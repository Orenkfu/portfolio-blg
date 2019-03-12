import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length?: number): any {
    if (!value) return;
    length = length ? length : 50;
    let returnVal = value.substr(0, length);
    if (returnVal.length < value.length)
      returnVal = returnVal + "...";
    return returnVal;
  }

}
