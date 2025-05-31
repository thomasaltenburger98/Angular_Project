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

/*
    getBooks(): Observable<Book[]>{
      return this.http.get<Book[]>(this.filePath);
  }*/
}
