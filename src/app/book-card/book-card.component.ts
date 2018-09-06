import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { RemoveBookComponent } from '../remove-book/remove-book.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book = new Book
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditBookComponent, {
      minWidth: '50%',
      maxHeight: '60%',
      data: {
        book: this.book,
        isNewBook: false
      }
    });
  };

  openRemoveDialog(): void {
    const dialogRef = this.dialog.open(RemoveBookComponent, {
      width: '350px',
      data: {
        book: this.book
      }
    });
  };
}
