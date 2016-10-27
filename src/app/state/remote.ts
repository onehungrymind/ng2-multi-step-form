import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

@Injectable()
export class RemoteService {
  constructor(private store: Store<Object>) {}

  sendDataToServer() {
    return this.store.take(1);
  }
}
