import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HealthService } from "../../state/health";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  @Output() onNext: EventEmitter<Object> = new EventEmitter();
  @Output() onBack: EventEmitter<Object> = new EventEmitter();
  health: Object = {};

  constructor(private healthService: HealthService) { }

  ngOnInit() {
    this.healthService.health$.subscribe(health => this.health = Object.assign({}, health));
  }

  next(health) {
    this.healthService.updateHealth(health);
    this.onNext.emit();
  }

}
