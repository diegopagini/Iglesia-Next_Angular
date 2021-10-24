import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'bibles',
    loadChildren: () =>
      import('./pages/bibles/bibles.module').then((m) => m.BiblesModule),
  },
  {
    path: 'content',
    loadChildren: () =>
      import('./pages/content/content.module').then((m) => m.ContentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
