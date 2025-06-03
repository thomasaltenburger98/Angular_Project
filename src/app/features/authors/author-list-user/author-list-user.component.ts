import {Component, OnInit} from '@angular/core';
import {Author, AuthorService} from '../../../core/author.service';
import {Router} from '@angular/router';
import {MatCard, MatCardAvatar, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-author-list-user',
  standalone: true,
  imports: [
    MatCardTitle,
    MatIcon,
    MatCardAvatar,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './author-list-user.component.html',
  styleUrl: './author-list-user.component.scss'
})
export class AuthorListUserComponent implements OnInit {

  authors: Author[] = [];
  constructor(private authorService: AuthorService, private router: Router) {}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data;
    });
  }

  goToDetail(authorId: number): void {
    this.router.navigate(['/authors/author-detail-user', authorId]);
  }
}
