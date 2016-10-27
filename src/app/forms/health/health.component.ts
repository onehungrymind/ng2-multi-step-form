import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HealthService } from "../../state/health";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();
  @Output() onBack: EventEmitter<Object> = new EventEmitter();
  health$: Observable<Object> = this.healthService.health$;
  health: Object = {};

  constructor(private healthService: HealthService) { }

  ngOnInit() {
    this.health$.subscribe(health => this.health = Object.assign({}, health));
  }

  submit(health) {
    this.healthService.updateHealth(health);
    this.onSubmit.emit();
  }

}
