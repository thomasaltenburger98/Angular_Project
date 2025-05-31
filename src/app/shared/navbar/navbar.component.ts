import { Component } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav, MatSidenavModule, RouterOutlet, RouterLink, MatNavList, MatListItem, MatToolbar, MatButton

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(private auth: AuthService) {



  }

  get role() {
    return this.auth.getRole();
  }

  loginLogout() {

  }


}
