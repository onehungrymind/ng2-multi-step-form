import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  @Output() onNext: EventEmitter<undefined> = new EventEmitter();
  @Output() onBack: EventEmitter<undefined> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
