import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

const initialHealth = {
  height: 75,
  weight: 210,
  bmi: 5
};

const UPDATE_HEALTH = 'UPDATE_HEALTH';

export const health = (state: Object = initialHealth, action: {type: string, payload: any}) => {
  switch (action.type) {
    case UPDATE_HEALTH:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class HealthService {
  health$: Observable<Object> = this.store.select('health');
  constructor(private store: Store<Object>) {}

  updateHealth(health) {
    this.store.dispatch({type: UPDATE_HEALTH, payload: health});
  }
}
