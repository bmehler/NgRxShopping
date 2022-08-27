import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Book } from 'src/app/shared/book';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent {

  @Output() created = new EventEmitter<Book>();

  submitted(form:any) {
    this.created.emit(new Book(
      form.controls['isbn'].value,
      form.controls['title'].value,
      form.controls['price'].value
    ));
  }
}
