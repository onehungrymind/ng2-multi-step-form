import { Component } from '@angular/core';
import { RemoteService } from '../state/remote';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  step: string = 'user';

  constructor(private remoteService: RemoteService) { }

  next() {
    this.step = 'health';
  }

  back() {
    this.step = 'user';
  }

  submit() {
    this.remoteService.sendDataToServer();

    this.back();
  }

}
