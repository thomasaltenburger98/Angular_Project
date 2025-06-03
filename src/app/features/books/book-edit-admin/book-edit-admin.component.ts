import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Author, AuthorService} from '../../../core/author.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book, BookService} from '../../../core/book.service';
import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-book-edit-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    AsyncPipe,
    MatSelect,
    MatOption,
    MatButton,
    MatInput,
    MatFormField,
    MatSelect
  ],
  templateUrl: './book-edit-admin.component.html',
  styleUrl: './book-edit-admin.component.scss'
})
export class BookEditAdminComponent implements OnInit {

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    authors: new FormControl<number[]>([], [Validators.required]),
    imgSrc: new FormControl('')
  });

  authors$!: Observable<Author[]>;
  bookId!: number;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authors$ = this.authorService.getAuthors();
    this.bookId = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBookById(this.bookId).subscribe(book => {
      if (book) {
        this.bookForm.patchValue(book);
      }
    });

  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const updatedBook: Book = {
        id: this.bookId,
        title: this.bookForm.get('title')?.value || '',
        description: this.bookForm.get('description')?.value || '',
        price: this.bookForm.get('price')?.value || 0,
        authors: this.bookForm.get('authors')?.value || [],
        imgSrc: this.bookForm.get('imgSrc')?.value || ''
      };
      this.bookService.updateBook(updatedBook).subscribe(() => {
        console.log('Buch erfolgreich aktualisiert.');
        this.router.navigate(['/books/book-list-admin']);
      });
    }
  }

  onDelete(): void {
    if (confirm('Soll das Buch wirklich gelöscht werden?')) {
      this.bookService.deleteBook(this.bookId).subscribe(() => {
        console.log('Buch gelöscht');
        this.router.navigate(['/books/book-list-admin']);
      });
    }
  }

}
