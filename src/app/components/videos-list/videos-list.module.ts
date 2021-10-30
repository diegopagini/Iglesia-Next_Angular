import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosListComponent } from './videos-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { VideoModule } from '../video/video.module';

@NgModule({
  declarations: [VideosListComponent],
  imports: [CommonModule, SharedModule, SpinnerModule, VideoModule],
  exports: [VideosListComponent],
})
export class VideosListModule {}
