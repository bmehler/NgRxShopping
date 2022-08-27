import { Injectable } from "@angular/core";

import { NgRedux } from "@angular-redux/store";

import { IAppState } from "../app.state";
import { Book } from "../shared/book";
import { Observable, timer } from "rxjs";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

@Injectable()
export class CartActions {
    constructor(private redux: NgRedux<IAppState>) {}

    createSingle(book:Book) {
        this.redux.dispatch({ type: ADD_ITEM, payload: book });
    }
}