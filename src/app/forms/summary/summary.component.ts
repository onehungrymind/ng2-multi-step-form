import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

  constructor(private store: Store<Object>) { }
}
