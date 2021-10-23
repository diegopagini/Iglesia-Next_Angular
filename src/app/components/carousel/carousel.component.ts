import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bibles } from 'src/app/interfaces/bibles.interface';
import { BibliaService } from 'src/app/services/biblia.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public bibles$: Observable<Bibles> | undefined;
  public config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.bibles$ = this.bibliaService.getBibles();
    this.bibles$.subscribe(console.log);
  }
}
