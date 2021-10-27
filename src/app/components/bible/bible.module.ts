import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleComponent } from './bible.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [BibleComponent],
  imports: [CommonModule, SharedModule, DialogModule],
  exports: [BibleComponent],
})
export class BibleModule {}
