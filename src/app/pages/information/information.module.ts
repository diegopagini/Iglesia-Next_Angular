import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationRoutingModule } from './information-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    SharedModule,
    InformationRoutingModule,
    ComponentsModule,
  ],
  exports: [InformationComponent],
})
export class InformationModule {}
