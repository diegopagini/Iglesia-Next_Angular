import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionsComponent } from './contributions.component';
import { ContributionsRoutingModule } from './contributions-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContributionsComponent],
  imports: [
    CommonModule,
    ContributionsRoutingModule,
    SharedModule,
    ComponentsModule,
    FormsModule,
  ],
  exports: [ContributionsComponent],
})
export class ContributionsModule {}
