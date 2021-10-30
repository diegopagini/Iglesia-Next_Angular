import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, SharedModule],
  exports: [VideoComponent],
})
export class VideoModule {}
