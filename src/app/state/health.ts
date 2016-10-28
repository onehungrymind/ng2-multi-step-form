import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './app-store';

const UPDATE_HEALTH = 'UPDATE_HEALTH';

export interface HealthProfile {
  height: number;
  weight: number;
  bmi: number;
}

const initialState = {
  height: null,
  weight: null,
  bmi: null
};

export const health = (state: HealthProfile = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case UPDATE_HEALTH:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class HealthService {
  health$: Observable<HealthProfile> = this.store.select('health');
  constructor(private store: Store<AppStore>) {}

  updateHealth(health) {
    this.store.dispatch({type: UPDATE_HEALTH, payload: health});
  }
}
