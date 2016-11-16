import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './app-store';

const UPDATE_USER = 'UPDATE_USER';

export interface UserProfile {
  firstName: string;
  lastName: string;
  gender: string;
  isAwesome: boolean;
  awesomenessReason: string;
}

const initialState = {
  firstName: '',
  lastName: '',
  gender: '',
  isAwesome: false,
  awesomenessReason: ''
};

export const user = (state: UserProfile = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class UserService {
  user$: Observable<UserProfile> = this.store.select('user');
  constructor(private store: Store<AppStore>) {}

  updateUser(user) {
    this.store.dispatch({type: UPDATE_USER, payload: user});
  }
}
