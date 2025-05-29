import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewAdminComponent } from './book-new-admin.component';

describe('BookNewAdminComponent', () => {
  let component: BookNewAdminComponent;
  let fixture: ComponentFixture<BookNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookNewAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
