import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Book } from '../book';
import { BooksService } from '../books.service';

export interface DialogData {
  book: Book;
};

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.scss']
})
export class RemoveBookComponent implements OnInit {
  book: Book;

  constructor(private booksService: BooksService,
    public dialogRef: MatDialogRef<RemoveBookComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
    this.book = this.dialogData.book;
  }


  ngOnInit() {
  }

  removeBookHandler() {
    this.booksService.removeBook(this.book.id)
    this.close();
  };

  close() {
    this.dialogRef.close();
  };

}
