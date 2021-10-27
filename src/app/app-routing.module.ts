import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

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
  {
    path: 'passage',
    loadChildren: () =>
      import('./pages/passage/passage.module').then((m) => m.PassageModule),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
      malformedUriErrorHandler: (
        error: URIError,
        urlSerializer: UrlSerializer,
        url: string
      ) => urlSerializer.parse('/page-not-found'),
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
