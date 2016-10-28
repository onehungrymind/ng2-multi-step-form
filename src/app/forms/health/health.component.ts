import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HealthService, HealthProfile } from "../../state/health";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  @Output() onNext: EventEmitter<Object> = new EventEmitter();
  @Output() onBack: EventEmitter<Object> = new EventEmitter();
  health: HealthProfile;
  form: FormGroup;

  constructor(
    private healthService: HealthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.healthService.health$.subscribe(health => this.health = Object.assign({}, health));

    this.form = this.fb.group({
      height: [''],
      weight: [''],
      bmi: ['']
    });
  }

  next() {
    this.healthService.updateHealth(this.form.value);
    this.onNext.emit();
  }
}
