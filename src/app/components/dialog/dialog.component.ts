import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bible } from 'src/app/interfaces/bibles.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Bible,
    private bibliaService: BibliaService,
    private dialogRef: MatDialogRef<DialogComponent>,
    private router: Router
  ) {}

  public setVersion(bible: Bible) {
    this.bibliaService.version = bible.abbreviatedTitle;
    this.closeDialog();
    this.router.navigateByUrl('/home');
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
