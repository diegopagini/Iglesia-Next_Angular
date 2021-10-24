import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bibles } from 'src/app/interfaces/bibles.interface';
import { BibliaService } from 'src/app/services/biblia.service';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public bibles$: Observable<Bibles> | undefined;
  public config: SwiperOptions = {
    loop: true,
    autoplay: true,
    breakpoints: {
      1920: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 5,
      },
      1366: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.bibles$ = this.bibliaService.getBibles();
  }
}
