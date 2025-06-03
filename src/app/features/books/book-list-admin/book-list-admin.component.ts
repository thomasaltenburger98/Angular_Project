import {Component, OnInit} from '@angular/core';
import {Book, BookService} from '../../../core/book.service';
import {Router} from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {CurrencyPipe} from '@angular/common';
import {MatButton, MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-book-list-admin',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    CurrencyPipe,
    MatIcon,
    MatMiniFabButton,
    MatButton
  ],
  templateUrl: './book-list-admin.component.html',
  styleUrl: './book-list-admin.component.scss'
})
export class BookListAdminComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService, private router: Router) {
  }


  ngOnInit() :void {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  goToDetail(bookId: number): void {
    this.router.navigate(['/books/book-edit-admin', bookId]);
  }
  addBook(): void {
    this.router.navigate(['/books/book-new-admin']);
  }

  deleteBook(book: Book): void {
    // TODO: Dialog einbauen mit Bestätigung
    console.log('Buch löschen – TODO: Buch wirklich löschen', book);
  }

}
