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

  getAuthorById(id: number): Observable<Author | undefined> {
    return this.getAuthors().pipe(
      map((authors) => authors.find((author) => author.id === id))
    );
  }


}
