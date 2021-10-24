import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleComponent } from './bible.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BibleComponent],
  imports: [CommonModule, SharedModule],
  exports: [BibleComponent],
})
export class BibleModule {}
