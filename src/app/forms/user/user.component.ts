import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserService } from '../../state/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() onNext: EventEmitter<Object> = new EventEmitter();
  @Output() onBack: EventEmitter<Object> = new EventEmitter();
  form: FormGroup;
  user: Object = {};

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: ['']
    });
  }

  next() {
    this.userService.updateUser(this.form.value);
    this.onNext.emit();
  }

}
