import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { LoadPassageGuard } from './guards/load-passage.guard';
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
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'passage',
    loadChildren: () =>
      import('./pages/passage/passage.module').then((m) => m.PassageModule),
    canActivate: [LoadPassageGuard],
  },
  {
    path: 'videos',
    loadChildren: () =>
      import('./pages/videos/videos.module').then((m) => m.VideosModule),
  },
  {
    path: 'location',
    loadChildren: () =>
      import('./pages/location/location.module').then((m) => m.LocationModule),
  },
  {
    path: 'contributions',
    loadChildren: () =>
      import('./pages/contributions/contributions.module').then(
        (m) => m.ContributionsModule
      ),
  },
  {
    path: 'information',
    loadChildren: () =>
      import('./pages/information/information.module').then(
        (m) => m.InformationModule
      ),
  },
  {
    path: 'prayer',
    loadChildren: () =>
      import('./pages/prayer/prayer.module').then((m) => m.PrayerModule),
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
