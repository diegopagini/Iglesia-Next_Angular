import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPassage } from '../store/actions/passage.actions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store) {}

  public searchPassage(passage: string) {
    this.store.dispatch(setPassage({ payload: passage }));
  }
}
