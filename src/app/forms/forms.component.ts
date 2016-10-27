import { Component } from '@angular/core';
import { ResultService } from '../state/result';
import { Observable } from "rxjs";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  step: string = 'user';
  store$: Observable<Object> = this.resultService.store$;

  constructor(private resultService: ResultService) { }

  next() {
    this.step = 'health';
  }

  back() {
    this.step = 'user';
  }

  submit() {
    this.resultService.sendDataToServer();

    this.back();
  }

}
