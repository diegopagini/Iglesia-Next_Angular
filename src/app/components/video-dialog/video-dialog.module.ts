import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDialogComponent } from './video-dialog.component';
import { SafeDomModule } from 'src/app/pipes/safe-dom.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VideoDialogComponent],
  imports: [CommonModule, SafeDomModule, SpinnerModule, SharedModule],
  exports: [VideoDialogComponent],
})
export class VideoDialogModule {}
