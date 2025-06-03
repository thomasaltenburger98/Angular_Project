import {Component, OnInit} from '@angular/core';
import {Author, AuthorService} from '../../../core/author.service';
import {Router} from '@angular/router';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatMiniFabButton} from '@angular/material/button';
import {Book} from '../../../core/book.service';

@Component({
  selector: 'app-author-list-admin',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    MatButton,
    MatMiniFabButton
  ],
  templateUrl: './author-list-admin.component.html',
  styleUrl: './author-list-admin.component.scss'
})
export class AuthorListAdminComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService, private router: Router) {
  }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data;
    });
  }

  goToDetail(authorId: number): void {
    this.router.navigate(['/authors/author-edit-admin', authorId]);
  }

  addAuthor(): void {
    // TODO: Navigation zu Buch-Formular (leeres Formular)
    console.log('Buch hinzufügen – TODO: Routing oder Dialog öffnen');
  }

  deleteAuthor(author: Author): void {
    const confirmDelete = confirm('Soll der Autor wirklich gelöscht werden?');
    if (confirmDelete) {
      this.authorService.deleteAuthor(author.id).subscribe(() => {
        console.log('Autor gelöscht');
        this.authors = this.authors.filter(a => a.id !== author.id); // Liste lokal aktualisieren
      });
    }
  }
}
