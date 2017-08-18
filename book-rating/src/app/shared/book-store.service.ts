import { Book } from './book';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'; // !!!! wichtig

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get<any[]>('http://api.angular.schule/books')
      .map(plainArray =>
        plainArray.map(b => new Book(
          b.isbn,
          b.title,
          b.description,
          b.rating))
      );
  }
}