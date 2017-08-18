import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'; // !!!! wichtig

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private http: HttpClient) {

    this.http.get<any[]>('http://api.angular.schule/books')
      .map(plainArray =>
        plainArray.map(b => new Book(b.isbn, b.title, b.description, b.rating))
      )
      .subscribe(response => {
        this.books = response;
      });
  }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3),
      new Book('222', '22', '22')
    ];
    this.reorderBooks(null);
  }

  reorderBooks(book: Book) {
    console.log(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(book: Book) {
    this.books.push(book);
  }
}
