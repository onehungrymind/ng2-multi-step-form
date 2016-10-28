import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogConfig, MdDialog, MdDialogRef } from '@angular/material';
import { SuccessDialogComponent } from './summary/success-dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{
  dialogRef: MdDialogRef<SuccessDialogComponent>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private dialog: MdDialog,
  ) { }

  openDialog() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(SuccessDialogComponent, config);
  }
}
