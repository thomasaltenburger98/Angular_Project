import {Component, OnInit} from '@angular/core';
import {Author, AuthorService} from '../../../core/author.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Book, BookService} from '../../../core/book.service';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-author-detail-user',
  standalone: true,
  imports: [
    MatCard,
    RouterLink
  ],
  templateUrl: './author-detail-user.component.html',
  styleUrl: './author-detail-user.component.scss'
})
export class AuthorDetailUserComponent implements OnInit {

  author: Author | undefined;
  books: Book[] = [];
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
  private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.authorService.getAuthorById(id).subscribe((author) => {
      this.author = author;
      if (author) {
        this.bookService.getBooks().subscribe((allBooks) => {
          this.books = allBooks.filter(book => author.books.includes(book.id));
        });
      }
    });
  }


/*  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.authorService.getAuthorById(id).subscribe((data) => {
      this.author = data;
    });
  }*/


}
