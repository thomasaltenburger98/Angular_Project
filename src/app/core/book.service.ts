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

  // private filePath= 'assets/data/db.json';
  private filePath = 'http://localhost:3000/books'; // Assuming you have a backend API^

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.filePath);
  }
  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.post<Book>(this.filePath + "", book);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.filePath}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.filePath}/${id}`);
  }
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.filePath}/${id}`);
  }

}
