import { Injectable } from '@angular/core';
import { Book } from './core/book.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private books: Book[] = [];

  addToCart(book: Book): void {
    this.books.push(book);
    console.log('Zum Warenkorb hinzugefügt:', book);
  }

  getCartItems(): Book[] {
    return this.books;
  }

  removeFromCart(book: Book): void {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
      console.log('Vom Warenkorb entfernt:', book);
    }
  }

}
