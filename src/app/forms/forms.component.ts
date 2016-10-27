import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogConfig, MdDialog, MdDialogRef } from '@angular/material';
import { RemoteService } from '../state/remote';
import { SuccessDialogComponent } from './success-dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  step: string = 'user';
  dialogRef: MdDialogRef<SuccessDialogComponent>;

  constructor(
    private remoteService: RemoteService,
    private viewContainerRef: ViewContainerRef,
    private dialog: MdDialog
  ) { }

  next() {
    this.step = 'health';
  }

  back() {
    this.step = 'user';
  }

  submit() {
    this.remoteService.sendDataToServer()
      .subscribe(data => this.openDialog());

    this.back();
  }

  openDialog() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(SuccessDialogComponent, config);
  }

}
