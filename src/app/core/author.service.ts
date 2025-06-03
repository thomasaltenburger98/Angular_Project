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
  private filePath = 'assets/data/db.json';

  constructor(private http: HttpClient) {
  }
  getAuthors(): Observable<Author[]> {
    return this.http.get<{ authors: Author[] }>(this.filePath).pipe(
      map(response => response.authors)
    );
  }


  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`http://localhost:3000/authors/${id}`);
  }
  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`http://localhost:3000/authors/${author.id}`, author);
  }
  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/authors/${id}`);
  }



}
