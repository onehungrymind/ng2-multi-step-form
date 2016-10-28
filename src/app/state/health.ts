import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

const UPDATE_HEALTH = 'UPDATE_HEALTH';

export interface HealthProfile {
  height: number;
  weight: number;
  bmi: number;
}

export const health = (state: Object = {}, action: {type: string, payload: any}) => {
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
