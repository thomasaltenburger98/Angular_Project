import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListAdminComponent } from './author-list-admin.component';

describe('AuthorListAdminComponent', () => {
  let component: AuthorListAdminComponent;
  let fixture: ComponentFixture<AuthorListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorListAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
