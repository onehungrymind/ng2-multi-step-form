import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HealthService } from "../../state/health";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  @Input() group;
  @Output() onNext: EventEmitter<Object> = new EventEmitter();
  @Output() onBack: EventEmitter<Object> = new EventEmitter();
  health: Object = {};

  constructor(private healthService: HealthService) { }

  ngOnInit() {
    this.healthService.health$.subscribe(health => this.health = Object.assign({}, health));
  }

  next() {
    this.healthService.updateHealth(this.group.value);
    this.onNext.emit();
  }

}
