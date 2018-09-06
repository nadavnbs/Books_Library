import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleConverter'
})
export class TitleConverterPipe implements PipeTransform {

  transform(input: string): string {

    return input.replace(/[^a-z ]/gi, '');
  }

}
