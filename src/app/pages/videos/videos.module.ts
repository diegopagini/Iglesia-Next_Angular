import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
  declarations: [VideosComponent],
  imports: [CommonModule, SharedModule, ComponentsModule, VideosRoutingModule],
  exports: [VideosComponent],
})
export class VideosModule {}
