import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditAdminComponent } from './book-edit-admin.component';

describe('BookEditAdminComponent', () => {
  let component: BookEditAdminComponent;
  let fixture: ComponentFixture<BookEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookEditAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
