import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { BibleModule } from '../bible/bible.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, SwiperModule, SharedModule, BibleModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
