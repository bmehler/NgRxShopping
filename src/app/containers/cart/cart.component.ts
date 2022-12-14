import { Observable } from 'rxjs';
import { IAppState } from 'src/app/app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from '@angular-redux/store';
import { CartActions } from 'src/app/actions/cart';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'bm-cart',
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  @select((state: IAppState) => state.cart.total) total$!:Observable<number>;
  @select((state: IAppState) => state.cart.items) items$!:Observable<Book[]>;

  constructor(private cart: CartActions) {}

  removeItemFromCart(book:Book) {
    this.cart.removeSingle(book);
  }
}
