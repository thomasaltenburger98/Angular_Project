import { Component } from '@angular/core';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSlideToggle,
    MatButton,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, private auth: AuthService) {
  }

navigateToBooks(){
    if (this.auth.hasRole('admin')){
      this.router.navigate(['/books/book-list-admin']);
    }
    else {
      this.router.navigate(['/books/book-list-user']);
    }
}

navigateToAuthors(){
    if (this.auth.hasRole('admin')){
      this.router.navigate(['/authors/author-list-admin']);
    }
    else {
      this.router.navigate(['/authors/author-list-user']);
    }
}

}
