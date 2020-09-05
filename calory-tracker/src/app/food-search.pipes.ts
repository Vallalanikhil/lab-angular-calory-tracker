import { Pipe, PipeTransform } from '@angular/core';
import Food from './foods';

@Pipe({
  name: 'foodSearch',
})
export class foodsearchpipes implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }

    return items.filter((item) => item[field].match(new RegExp(value, 'i')));
  }
}
