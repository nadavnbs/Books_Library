import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';
import { EditBookComponent } from '../edit-book/edit-book.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  book: Book = new Book();
  currentSearchTerm: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(EditBookComponent, {
      minWidth: '50%',
      maxHeight: '60%',
      data: {
        isNewBook: true,
        book: new Book()
      }
    });
  };

  searchBook(textSearch: string) {
    this.currentSearchTerm = textSearch;
    console.log(textSearch)
    
  };

}
