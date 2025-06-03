import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {Book, BookService} from '../../../core/book.service';
import {ActivatedRoute} from '@angular/router';
import {MatList, MatListItem} from '@angular/material/list';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardModule,
  MatCardTitle
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatChip} from '@angular/material/chips';
import {MatButton} from '@angular/material/button';
import {Author, AuthorService} from '../../../core/author.service';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-book-detail-user',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatIcon,
    MatListItem,
    MatList,
    MatIcon,
    MatCard,
    MatChip,
    MatButton,
    MatCardImage,
    MatCardHeader,
    MatCardContent,
    DatePipe,
    MatCardTitle,
    MatCardAvatar,
    MatCardModule
  ],
  templateUrl: './book-detail-user.component.html',
  styleUrl: './book-detail-user.component.scss'
})
export class BookDetailUserComponent implements OnInit {
  book: Book | undefined;
  authors: Author[]=[];


  constructor(private route: ActivatedRoute, private bookService: BookService, private authorService: AuthorService) {}
  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getBookById(id).subscribe((book: Book) => {
      this.book = book;
    });

    this.authorService.getAuthors().subscribe((data: Author[]) => {
      this.authors = data;
    });
  }

/*  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBooks().subscribe(books => {
      this.book = books.find(b => b.id === id);
    });
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data;
    });

  }*/

  getAuthorsOfBook(): Author[] {
    if (!this.book || !this.book.authors) return [];
    return this.authors.filter(author => this.book!.authors.includes(author.id));
  }

  onAddToCartClick(): void {
    console.log('Buch zum Warenkorb hinzufügen (noch nicht implementiert).');
  }




}
