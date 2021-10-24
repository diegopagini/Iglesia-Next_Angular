import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiblesComponent } from './bibles.component';

const routes: Routes = [
  {
    path: '',
    component: BiblesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiblesRoutingModule {}
