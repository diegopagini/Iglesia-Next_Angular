import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, SharedModule, SpinnerModule, RouterModule],
  exports: [BooksComponent],
})
export class BooksModule {}
