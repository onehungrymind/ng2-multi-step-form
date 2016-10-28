import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../state/app-store';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(private store: Store<AppStore>) { }
}
