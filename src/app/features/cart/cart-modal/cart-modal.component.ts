import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; // MatCardModule importieren
import { MatIcon } from '@angular/material/icon';
import { Book } from '../../../core/book.service';
import { CartService } from '../../../cart.service';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule
  ],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(CartModalDialog, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'cart-modal-dialog',
  templateUrl: 'cart-modal-dialog.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule, // MatCardModule hinzufügen
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIcon,
    CurrencyPipe
  ],
})
export class CartModalDialog {
  readonly dialogRef = inject(MatDialogRef<CartModalDialog>);
  booksInCart: Book[] = [];
  isLoggedIn: boolean = false;
  successfulCheckout = false;
  router = inject(Router);

  constructor(private cartService: CartService, private authService: AuthService) {}

  ngOnInit(): void {
    this.booksInCart = this.cartService.getCartItems();
    this.isLoggedIn = this.authService.isAuthenticated();
    console.log(this.isLoggedIn);
  }

  get totalPrice(): number {
    let price = 0;
    this.booksInCart.forEach(book => { price += Number(book.price) || 0; });
    return price;
  }

  onLogin() {
    this.dialogRef.close();
    this.authService.loginWithSampleUser();
    this.router.navigate(['/']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCheckout(): void {
    this.successfulCheckout = true;
  }
  onContinueShopping(): void {
    this.successfulCheckout = false;
    this.dialogRef.close();
    this.router.navigate(['books/book-list-user']);
  }

}
