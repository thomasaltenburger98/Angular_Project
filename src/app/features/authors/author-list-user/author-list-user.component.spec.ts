import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListUserComponent } from './author-list-user.component';

describe('AuthorListUserComponent', () => {
  let component: AuthorListUserComponent;
  let fixture: ComponentFixture<AuthorListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorListUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
