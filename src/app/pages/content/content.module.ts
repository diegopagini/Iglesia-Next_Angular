import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContentRoutingModule } from './content-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, SharedModule, ContentRoutingModule, ComponentsModule],
  exports: [ContentComponent],
})
export class ContentModule {}
