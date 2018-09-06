import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<Book>;
  bookSubject: Subject<Book[]> = new Subject<Book[]>();
  bookObservable: Observable<Book[]>;

  search:any;
  searchSubject: Subject<string> = new Subject<string>();
  searchObservable: Observable<string>;

  constructor(private http: HttpClient) {
    this.bookObservable = this.bookSubject.asObservable();
    this.searchObservable = this.searchSubject.asObservable();
  }

  getBooks() {
    let userId = '103202065418740874149';
    let bookshelfId = '1001'
    let param = Math.floor((Math.random() * 12) + 10);


    let Observable = this.http.get<Array<Book>>('https://www.googleapis.com/books/v1/users/' + userId + '/bookshelves/' + bookshelfId + '/volumes?maxResults=40')
    // let Observable = this.http.get<Array<Book>>("https://www.googleapis.com/books/v1/volumes?q=" + param)
    Observable.subscribe((data) => {
      this.books = this.createBooksArray(data);
      this.bookSubject.next(this.books)
    })
  };

  createBooksArray(data) {
    // console.log(data.items)
    return data.items.map((book) => {

      let bookData = {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        year: book.volumeInfo.publishedDate,
        img: book.volumeInfo.imageLinks.thumbnail,
        isNewBook: true
      }

      let newBook = new Book()
      newBook.initializeId();
      newBook.edit(bookData);

      return newBook
    })
  };

  updateBooksArray(book: Book, isNewBook: Boolean) {
    if (isNewBook) {
      this.books.push(book)
    } else {
      let index = this.bookIndexById(book.id)
      this.books.splice(index, 1, book)
    }
    this.bookSubject.next(this.books)
  };

  removeBook(bookId) {
    let index = this.bookIndexById(bookId)
    this.books.splice(index, 1)
    this.bookSubject.next(this.books)
  };

  bookIndexById(bookId) {
    return this.books.findIndex((element) => {
      return element.id == bookId;
    });
  };

  sendSearchTextUpdates(searchText) {
    this.searchSubject.next(searchText)
  };
}
