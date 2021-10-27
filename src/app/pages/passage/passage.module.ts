import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageComponent } from './passage.component';
import { PassageRoutingModule } from './passage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PassageComponent],
  imports: [CommonModule, PassageRoutingModule, SharedModule],
  exports: [PassageComponent],
})
export class PassageModule {}
