import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  step: number = 1;
  totalSteps: number = 2;

  constructor() { }

  ngOnInit() {
  }

  next() {
    if (this.step + 1 <= this.totalSteps)
      this.step++;
  }

  back() {
    if (this.step - 1 >= 1)
      this.step--;
  }

}
