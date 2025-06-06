import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Author {
  id: number;
  firstname: string;
  lastname: string;
  bio: string;
  birthday: string;
  books: number[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  // private filePath = 'assets/data/db.json';
  private filePath = 'http://localhost:3000/authors'; // Assuming you have a backend API

  constructor(private http: HttpClient) {
  }
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.filePath);
  }


  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.filePath}/${id}`);
  }
  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.filePath}/${author.id}`, author);
  }
  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.filePath}/${id}`);
  }



}
