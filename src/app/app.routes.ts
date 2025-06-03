import { Routes } from '@angular/router';
import {BookListUserComponent} from './features/books/book-list-user/book-list-user.component';
import {AuthorListUserComponent} from './features/authors/author-list-user/author-list-user.component';
import {CartModalComponent} from './features/cart/cart-modal/cart-modal.component';
import {BookListAdminComponent} from './features/books/book-list-admin/book-list-admin.component';
import {AuthorListAdminComponent} from './features/authors/author-list-admin/author-list-admin.component';
import {HomeComponent} from './features/home/home.component';
import {BookDetailUserComponent} from './features/books/book-detail-user/book-detail-user.component';
import {BookEditAdminComponent} from './features/books/book-edit-admin/book-edit-admin.component';
import {AuthorDetailUserComponent} from './features/authors/author-detail-user/author-detail-user.component';
import {AuthorEditAdminComponent} from './features/authors/author-edit-admin/author-edit-admin.component';
import {BookNewAdminComponent} from './features/books/book-new-admin/book-new-admin.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books/book-list-user', component: BookListUserComponent},
  {path: 'books/book-detail-user/:id', component: BookDetailUserComponent},
  {path: 'books/book-edit-admin/:id', component: BookEditAdminComponent},
  { path: 'books/book-new-admin', component: BookNewAdminComponent },
  {path: 'authors/author-list-user', component: AuthorListUserComponent},
  { path: 'authors/author-detail-user/:id', component: AuthorDetailUserComponent },
  { path: 'authors/author-edit-admin/:id', component: AuthorEditAdminComponent },
  {path: 'cart/cart-modal', component: CartModalComponent},
  {path: 'books/book-list-admin', component: BookListAdminComponent},
  {path: 'authors/author-list-admin', component: AuthorListAdminComponent}
];
