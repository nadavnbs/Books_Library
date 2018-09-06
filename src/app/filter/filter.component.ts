import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  searchText:any;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  searchBookByTitle() {
    this.booksService.sendSearchTextUpdates(this.searchText);
  };

}
