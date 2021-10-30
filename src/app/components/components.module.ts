import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { BooksModule } from './books/books.module';
import { SpinnerModule } from './spinner/spinner.module';
import { FooterModule } from './footer/footer.module';
import { BibleModule } from './bible/bible.module';
import { BiblesModule } from './bibles/bibles.module';
import { VideosListModule } from './videos-list/videos-list.module';
import { VideoDialogModule } from './video-dialog/video-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    BibleModule,
    BiblesModule,
    VideosListModule,
    VideoDialogModule,
  ],
  exports: [
    HeaderModule,
    BooksModule,
    SpinnerModule,
    FooterModule,
    BibleModule,
    BiblesModule,
    VideosListModule,
    VideoDialogModule,
  ],
})
export class ComponentsModule {}
