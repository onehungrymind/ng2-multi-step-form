import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  store$: Store<Object> = this.store;
  constructor(private store: Store<Object>) { }
}
