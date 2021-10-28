import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  routerOptions: any[] = [
    {
      name: 'Biblia',
      icon: 'menu_book',
      link: '/bibles',
    },
    {
      name: 'Buscar',
      icon: 'search',
      link: '/search',
    },
  ];
}
