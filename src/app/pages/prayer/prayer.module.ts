import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrayerComponent } from './prayer.component';
import { PrayerRoutingModule } from './prayer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PrayerComponent],
  imports: [CommonModule, PrayerRoutingModule, SharedModule, ComponentsModule],
  exports: [PrayerComponent, PrayerRoutingModule],
})
export class PrayerModule {}
