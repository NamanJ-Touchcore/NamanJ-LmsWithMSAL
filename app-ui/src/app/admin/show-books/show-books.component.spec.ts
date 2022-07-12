import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksAdminComponent } from './show-books.component';

describe('ShowBooksAdminComponent', () => {
  let component: ShowBooksAdminComponent;
  let fixture: ComponentFixture<ShowBooksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBooksAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBooksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
