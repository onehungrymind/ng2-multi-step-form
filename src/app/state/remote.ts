import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

@Injectable()
export class RemoteService {
  constructor(private store: Store<Object>) {}

  sendDataToServer() {
    this.store
      .take(1)
      .subscribe(store => alert('Sending data to server: \n\n' + JSON.stringify(store, null, '  ')));
  }
}
