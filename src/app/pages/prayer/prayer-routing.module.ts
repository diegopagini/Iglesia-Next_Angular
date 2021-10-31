import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrayerComponent } from './prayer.component';

const routes: Routes = [
  {
    path: '',
    component: PrayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerRoutingModule {}
