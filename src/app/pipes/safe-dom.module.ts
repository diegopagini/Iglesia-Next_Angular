import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeDomPipe } from './safe-dom.pipe';

@NgModule({
  declarations: [SafeDomPipe],
  imports: [CommonModule],
  exports: [SafeDomPipe],
})
export class SafeDomModule {}
