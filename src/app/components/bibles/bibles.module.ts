import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblesComponent } from './bibles.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BiblesComponent],
  imports: [CommonModule, SharedModule],
  exports: [BiblesComponent],
})
export class BiblesModule {}
