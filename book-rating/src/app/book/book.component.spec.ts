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

  // TODO:
  it('should rateUp the book when the button is pressed', () => {

    component.book = {
      title: 'Mocked Book!',
      rateUp: () => { },
    } as Book;

    spyOn(component.book, 'rateUp');
    fixture.detectChanges();

    fixture.nativeElement.querySelector('[data-rate-up-button]').click();
    expect(component.book.rateUp).toHaveBeenCalled();
  });
});
