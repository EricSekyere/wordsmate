import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(input: any): any {
    const keys = [];
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        keys.push({ key: key, value: input[key] });
      }
    }
    return keys;
  }

}
