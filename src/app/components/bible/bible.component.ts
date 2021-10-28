import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bible } from 'src/app/interfaces/bibles.interface';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss'],
})
export class BibleComponent {
  @Input() bible: Bible | undefined;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: this.bible,
    });
  }
}
