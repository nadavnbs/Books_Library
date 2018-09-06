import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  books = new Array<Book>();
  currentSearch: string;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.bookObservable.subscribe((data) => {
      this.books = data;

    });
    this.booksService.getBooks();

    this.booksService.searchObservable.subscribe((searchText) => {
      this.currentSearch = searchText
    });
  };

}
