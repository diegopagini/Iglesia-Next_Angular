import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblesComponent } from './bibles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BibleModule } from '../bible/bible.module';

@NgModule({
  declarations: [BiblesComponent],
  imports: [CommonModule, SharedModule, BibleModule],
  exports: [BiblesComponent],
})
export class BiblesModule {}
