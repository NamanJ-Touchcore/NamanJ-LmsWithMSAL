import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksStudentComponent } from './show-books.component';

describe('ShowBooksStudentComponent', () => {
  let component: ShowBooksStudentComponent;
  let fixture: ComponentFixture<ShowBooksStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBooksStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBooksStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
