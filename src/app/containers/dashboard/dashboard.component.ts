import { IAppState } from 'src/app/app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { BookActions } from 'src/app/actions/books';
import { CartActions } from 'src/app/actions/cart';
import { Book } from 'src/app/shared/book';


@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  @select((state: IAppState) => state.books.all) books$!: Observable<Book[]>
  
  constructor(private books: BookActions, private cart: CartActions) { }

  addBook(book: Book) {
    this.books.addSingle(book);
  }

  addBookToCart(book:Book) {
    this.cart.createSingle(book);
  }

}
