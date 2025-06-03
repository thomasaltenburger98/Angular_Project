import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Book{
  id: number;
  title: string;
  description: string;
  price: number;
  authors: number[];
  imgSrc: string;
}
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private filePath= 'assets/data/db.json';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<{ books: Book[] }>(this.filePath).pipe(
      map(response => response.books)
    );
  }
  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/books/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/books/${id}`);
  }
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

}
