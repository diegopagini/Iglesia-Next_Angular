import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { BooksModule } from './books/books.module';
import { SpinnerModule } from './spinner/spinner.module';
import { FooterModule } from './footer/footer.module';
import { BibleModule } from './bible/bible.module';
import { BiblesModule } from './bibles/bibles.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    BibleModule,
    BiblesModule,
  ],
  exports: [
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    BibleModule,
    BiblesModule,
  ],
})
export class ComponentsModule {}
