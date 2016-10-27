import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-success-dialog',
  template: `
    <h1>Sending data to server:</h1>
    
    <pre>{{store | async | json}}</pre>
  `
})

export class SuccessDialogComponent {
  constructor(private store: Store<Object>) {}
}
