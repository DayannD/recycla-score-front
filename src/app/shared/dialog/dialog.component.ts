import { Component, Inject, Input } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    BtnComponent,
    MatDialogClose,
    MatDialogActions,
    MatButtonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {message: string}
  ) { }

  onClick(): void {
    this.dialogRef.close();
  }
}
