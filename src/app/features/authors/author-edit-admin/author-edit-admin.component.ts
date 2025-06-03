import {Component, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {Author, AuthorService} from '../../../core/author.service';
import {Book, BookService} from '../../../core/book.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-author-edit-admin',
  standalone: true,
  imports: [
    MatCard,
    RouterLink,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
    MatInput,
    MatFormField
  ],
  templateUrl: './author-edit-admin.component.html',
  styleUrl: './author-edit-admin.component.scss'
})
export class AuthorEditAdminComponent implements OnInit {
  authorForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    bio: new FormControl(''),
  });

  authorId!: number;
  books: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorId = Number(this.route.snapshot.paramMap.get('id'));
    this.authorService.getAuthorById(this.authorId).subscribe((author) => {
      if (author) {
        this.authorForm.patchValue(author);
        this.bookService.getBooks().subscribe((allBooks) => {
          this.books = allBooks.filter(book => author.books.includes(book.id));
        });
      }
    });
  }

  onSubmit(): void {
    if (this.authorForm.valid) {
      const updatedAuthor: Author = {
        id: this.authorId,
        firstname: this.authorForm.get('firstname')?.value || '',
        lastname: this.authorForm.get('lastname')?.value || '',
        birthday: this.authorForm.get('birthday')?.value || '',
        bio: this.authorForm.get('bio')?.value || '',
        books: this.books.map(book => book.id)
      };

      this.authorService.updateAuthor(updatedAuthor).subscribe(() => {
        console.log('Autor erfolgreich aktualisiert.');
        this.router.navigate(['/authors/author-list-admin']);
      });
    }
  }

  onDelete(): void {
    if (confirm('Soll der Autor wirklich gelöscht werden?')) {
      this.authorService.deleteAuthor(this.authorId).subscribe(() => {
        console.log('Autor gelöscht');
        this.router.navigate(['/authors/author-list-admin']);
      });
    }
  }
}
