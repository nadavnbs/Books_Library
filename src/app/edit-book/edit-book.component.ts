import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Book } from '../book';
import { BooksService } from '../books.service';

export interface DialogData {
  isNewBook: Boolean;
  book: Book;
};

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: Book;
  bookEdit: FormGroup;
  isNewBook: Boolean;

  constructor(private booksService: BooksService,
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private fb: FormBuilder) {

    this.isNewBook = this.dialogData.isNewBook;
    this.book = this.dialogData.book;

    this.bookEdit = fb.group({
      title: new FormControl(this.book.title, [Validators.required]),
      year: new FormControl(this.book.year, [Validators.required,
      Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$|(18|19|20)\d\d$/g)]),
      authors: new FormControl(this.book.authors, [Validators.required])
    });
  }

  ngOnInit() {
  };

  onSubmit() {
    if (this.isNewBook == true) {
      this.book.initializeId();
    }
    this.book.edit(this.bookEdit.value);
    this.booksService.updateBooksArray(this.book, this.isNewBook)
    this.close();
  };

  close() {
    this.dialogRef.close();
  };

}
