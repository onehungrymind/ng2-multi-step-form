import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

const UPDATE_USER = 'UPDATE_USER';

export const user = (state: Object = {}, action: {type: string, payload: any}) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class UserService {
  user$: Observable<Object> = this.store.select('user');
  constructor(private store: Store<Object>) {}

  updateUser(user) {
    this.store.dispatch({type: UPDATE_USER, payload: user});
  }
}
