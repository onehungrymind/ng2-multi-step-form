import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, UserProfile } from '../../state/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.user$
      .subscribe(this.initForm.bind(this));
  }

  initForm(user: UserProfile) {
    this.form = this.fb.group({
      firstName: [user.firstName],
      lastName: [user.lastName],
      gender: [user.gender]
    });
  }

  next() {
    this.userService.updateUser(this.form.value);
    this.router.navigateByUrl('health');
  }
}
