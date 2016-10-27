import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../state/user';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() onNext: EventEmitter<Object> = new EventEmitter();
  @Output() onBack: EventEmitter<Object> = new EventEmitter();
  user: Object = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = Object.assign({}, user));
  }

  next(user) {
    this.userService.updateUser(user);
    this.onNext.emit();
  }

}
