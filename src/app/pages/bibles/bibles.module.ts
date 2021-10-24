import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblesComponent } from './bibles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { BiblesRoutingModule } from './bibles-routing.module';

@NgModule({
  declarations: [BiblesComponent],
  imports: [CommonModule, SharedModule, ComponentsModule, BiblesRoutingModule],
  exports: [BiblesComponent],
})
export class BiblesModule {}
