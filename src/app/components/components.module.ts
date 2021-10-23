import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { BooksModule } from './books/books.module';
import { SpinnerModule } from './spinner/spinner.module';
import { FooterModule } from './footer/footer.module';
import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    CarouselModule,
  ],
  exports: [
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    CarouselModule,
  ],
})
export class ComponentsModule {}
