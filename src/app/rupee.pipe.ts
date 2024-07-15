import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee'
})
export class RupeePipe implements PipeTransform {
  transform(value: number): string {
    if (value !== null && !isNaN(value)) {
      const rupeeFormat = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      });
      return rupeeFormat.format(value);
    } else {
      return '';
    }
  }
}

