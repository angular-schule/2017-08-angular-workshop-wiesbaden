import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(() => {
    component = new DashboardComponent();
    // poor man's livecycle
    component.ngOnInit();
  });

  it('should have 3 books', () => {
    expect(component.books.length).toBe(3);
  });
});
