import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private bookStore: BookStoreService) {

    this.bookStore.getAll()
      .subscribe(books => {
        this.books = books;
        this.reorderBooks(null);
      });
  }
  reorderBooks(book: Book) {
    console.log(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(book: Book) {
    this.books.push(book);
  }
}
