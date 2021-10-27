import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, SharedModule],
  exports: [DialogComponent],
})
export class DialogModule {}
