// custom filter to replace stupid ampersant in jsom for img url.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amp'
})
export class AmpPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/&amp;/, '&');
  }

}
