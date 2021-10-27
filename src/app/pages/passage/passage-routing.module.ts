import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassageComponent } from './passage.component';

const routes: Routes = [
  {
    path: '',
    component: PassageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassageRoutingModule {}
