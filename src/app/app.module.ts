import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CartComponent } from './containers/cart/cart.component';
import { BookActions } from './actions/books';
import { CartActions } from './actions/cart';

import { reducer } from './reducers/index';
import { IAppState } from './app.state';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    BookFormComponent,
    BookItemComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [BookActions, CartActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(reducer, {} as IAppState)
  }
 }
