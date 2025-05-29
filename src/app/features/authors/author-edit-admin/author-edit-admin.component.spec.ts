import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorEditAdminComponent } from './author-edit-admin.component';

describe('AuthorEditAdminComponent', () => {
  let component: AuthorEditAdminComponent;
  let fixture: ComponentFixture<AuthorEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorEditAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
