import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailUserComponent } from './author-detail-user.component';

describe('AuthorDetailUserComponent', () => {
  let component: AuthorDetailUserComponent;
  let fixture: ComponentFixture<AuthorDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorDetailUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
