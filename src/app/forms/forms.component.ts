import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { MdDialogConfig, MdDialog, MdDialogRef } from '@angular/material';
import { RemoteService } from '../state/remote';
import { SuccessDialogComponent } from './success-dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  step: number = 1;
  totalSteps: number = 3;
  dialogRef: MdDialogRef<SuccessDialogComponent>;

  constructor(
    private remoteService: RemoteService,
    private viewContainerRef: ViewContainerRef,
    private dialog: MdDialog,
  ) { }

  ngOnInit() {}

  next() {
    if (this.step + 1 <= this.totalSteps) this.step++;
  }

  back() {
    if (this.step - 1 >= 1) this.step--;
  }

  backToStart() {
    this.step = 1;
  }

  submit() {
    this.remoteService.sendDataToServer()
      .subscribe(data => this.openDialog());

    this.backToStart();
  }

  openDialog() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(SuccessDialogComponent, config);
  }
}
