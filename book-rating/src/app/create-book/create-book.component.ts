import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Book } from '../shared/book';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  // TODO: two-bay binding
  book = Book.empty();

  // named reference var
  @ViewChild('isbn') myIsbnNgModel: NgModel;

  // by type
  @ViewChild(NgForm) myForm: NgForm;

  @Output()
  bookCreated = new EventEmitter<Book>();

  add() {
    console.log(this.myIsbnNgModel);

    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.myForm.reset(this.book);
  }
}
