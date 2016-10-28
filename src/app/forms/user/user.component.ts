import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserService } from '../../state/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() group;
  @Output() onNext: EventEmitter<Object> = new EventEmitter();
  @Output() onBack: EventEmitter<Object> = new EventEmitter();
  user: Object = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = Object.assign({}, user));
  }

  next() {
    this.userService.updateUser(this.group.value);
    this.onNext.emit();
  }

}
