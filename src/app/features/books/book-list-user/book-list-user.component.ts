import {Component, OnInit} from '@angular/core';
import {Book, BookService} from '../../../core/book.service';

@Component({
  selector: 'app-book-list-user',
  standalone: true,
  imports: [],
  templateUrl: './book-list-user.component.html',
  styleUrl: './book-list-user.component.scss'
})
export class BookListUserComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService) {
  }


  ngOnInit() :void {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }
}
