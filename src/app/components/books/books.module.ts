import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, SharedModule, SpinnerModule],
  exports: [BooksComponent],
})
export class BooksModule {}
