import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], currentSearchTerm): Book[] {

    if (!books) { return []; }
    if (!currentSearchTerm) { return books; }
    if (typeof currentSearchTerm === "string") {

      currentSearchTerm = currentSearchTerm.toLowerCase();

      return books.filter(element => {

        return element.title.toLowerCase().includes(currentSearchTerm);
      });
    }
  }

}
