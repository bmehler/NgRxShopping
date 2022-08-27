import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Book } from 'src/app/shared/book';

@Component({
  selector: 'bm-cart-item',
  templateUrl: './cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() item!:Book;
  @Output() removed = new EventEmitter<Book>();
}