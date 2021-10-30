import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { LocationRoutingModule } from './location-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, LocationRoutingModule, ComponentsModule],
  exports: [LocationComponent],
})
export class LocationModule {}
