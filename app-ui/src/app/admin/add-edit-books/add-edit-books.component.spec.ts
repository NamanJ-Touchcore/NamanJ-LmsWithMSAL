import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBooksAdminComponent } from './add-edit-books.component';

describe('AddEditBooksAdminComponent', () => {
  let component: AddEditBooksAdminComponent;
  let fixture: ComponentFixture<AddEditBooksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBooksAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBooksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
