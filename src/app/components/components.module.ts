import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { BooksModule } from './books/books.module';
import { SpinnerModule } from './spinner/spinner.module';
import { FooterModule } from './footer/footer.module';
import { CarouselModule } from './carousel/carousel.module';
import { BibleModule } from './bible/bible.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    CarouselModule,
    BibleModule,
  ],
  exports: [
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    CarouselModule,
    BibleModule,
  ],
})
export class ComponentsModule {}
