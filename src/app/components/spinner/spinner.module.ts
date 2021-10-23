import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, SharedModule],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
