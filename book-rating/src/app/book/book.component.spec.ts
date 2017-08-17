import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // this is an integration test (because it's a real book!)
    // component.book = new Book('IBN', 'Titel', 'Tada!');
  });

  it('should forward rateUp call to book', () => {

    let rateUpWasCalled = false;

    component.book = {
      title: 'Mocked Book!',
      rateUp: () => {
        rateUpWasCalled = true;
      },
    } as Book;

    component.rateUp();
    fixture.detectChanges();

    expect(rateUpWasCalled).toBe(true);
  });
});
