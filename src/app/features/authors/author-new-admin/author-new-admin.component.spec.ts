import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorNewAdminComponent } from './author-new-admin.component';

describe('AuthorNewAdminComponent', () => {
  let component: AuthorNewAdminComponent;
  let fixture: ComponentFixture<AuthorNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorNewAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
