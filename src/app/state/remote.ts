import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';
import { AppStore } from './app-store';

@Injectable()
export class RemoteService {
  constructor(private store: Store<AppStore>) {}

  sendDataToServer() {
    return this.store.take(1);
  }
}
