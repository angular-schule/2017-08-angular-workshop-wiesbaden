import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

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
