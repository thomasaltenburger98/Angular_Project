import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatError} from '@angular/material/form-field';
import {Book, BookService} from '../../../core/book.service';
import {Observable} from 'rxjs';
import {Author, AuthorService} from '../../../core/author.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-book-new-admin',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatError,
    MatSelect,
    AsyncPipe,
    MatOption,
    CommonModule
  ],
  templateUrl: './book-new-admin.component.html',
  styleUrl: './book-new-admin.component.scss'
})
export class BookNewAdminComponent implements OnInit {

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    authors: new FormControl<number[]>([], [Validators.required]),
    imgSrc: new FormControl('')
  });

  authors$!: Observable<Author[]>; // <== nur deklariert

  constructor(private authorService: AuthorService, private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    this.authors$ = this.authorService.getAuthors(); // <== jetzt korrekt initialisiert
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: Omit<Book, 'id'> = {
        title: this.bookForm.get('title')?.value ?? '',
        description: this.bookForm.get('description')?.value ?? '',
        price: this.bookForm.get('price')?.value ?? 0,
        authors: this.bookForm.get('authors')?.value ?? [],
        imgSrc: this.bookForm.get('imgSrc')?.value ?? ''
      };


      this.bookService.addBook(newBook).subscribe({
        next: () => {
          console.log('Buch erfolgreich gespeichert.');
          this.router.navigate(['/books/book-list-admin']);
        },
        error: (err) => {
          console.error('Fehler beim Speichern des Buchs:', err);
        }
      });
    }
  }



}
