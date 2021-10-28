import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageComponent } from './passage.component';
import { PassageRoutingModule } from './passage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [PassageComponent],
  imports: [CommonModule, PassageRoutingModule, SharedModule, FooterModule],
  exports: [PassageComponent],
})
export class PassageModule {}
