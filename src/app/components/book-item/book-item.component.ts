import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Book } from 'src/app/shared/book';

@Component({
  selector: 'bm-book-item',
  templateUrl: './book-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent {
  @Input() book!: Book;
  @Output() added = new EventEmitter<Book>();
}
