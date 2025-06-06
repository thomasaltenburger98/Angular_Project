import { Component } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import { SearchBarComponent } from "../search-bar/search-bar.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav, MatSidenavModule, RouterOutlet, RouterLink, MatNavList, MatListItem, MatToolbar, MatButton,
    SearchBarComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(private auth: AuthService) {



  }

  get role() {
    return this.auth.getUser()?.role;
  }

  loginLogout() {
    if (this.auth.isAuthenticated()) {
      this.auth.logout();
    } else {
      this.auth.loginWithSampleUser();
    }
  }

  onSearch(searchTerm: string): void {
    // Hier können Sie die Logik für die Suche implementieren
    console.log('Suchbegriff:', searchTerm);
    // Zum Beispiel könnten Sie eine Methode aufrufen, um die Suchergebnisse zu filtern
    // this.filterBooks(searchTerm);
  }


}
