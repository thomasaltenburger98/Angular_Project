import {Component, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {Author, AuthorService} from '../../../core/author.service';
import {Book, BookService} from '../../../core/book.service';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-author-edit-admin',
  standalone: true,
  imports: [
    MatCard,
    RouterLink
  ],
  templateUrl: './author-edit-admin.component.html',
  styleUrl: './author-edit-admin.component.scss'
})
export class AuthorEditAdminComponent implements OnInit {
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
}
