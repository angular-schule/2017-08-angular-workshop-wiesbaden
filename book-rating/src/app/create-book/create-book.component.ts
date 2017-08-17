import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Book } from '../shared/book';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  // TODO: two-bay binding
  book = Book.empty();

  @ViewChild('isbn') myIsbnNgModel: NgModel;

  @Output()
  bookCreated = new EventEmitter<Book>();

  add() {
    console.log(this.myIsbnNgModel);

    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }
}
