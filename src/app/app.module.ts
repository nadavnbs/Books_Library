import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { HeaderComponent } from './header/header.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilterPipe } from './filter.pipe';
import { TitleConverterPipe } from './title-converter.pipe';
import { BooksService } from './books.service';


@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    HeaderComponent,
    RemoveBookComponent,
    EditBookComponent,
    AllBooksComponent,
    FilterComponent,
    FilterPipe,
    TitleConverterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  entryComponents: [EditBookComponent, RemoveBookComponent],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
