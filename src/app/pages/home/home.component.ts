import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    {
      name: 'Videos',
      icon: 'smart_display',
      link: '/videos',
    },
    {
      name: 'Ubicación',
      icon: 'location_on',
      link: '/location',
    },
    {
      name: 'Contribuciones',
      icon: 'volunteer_activism',
      link: '/contributions',
    },
  ];

  ngOnInit(): void {
    this.sortRouterOptions();
  }

  private sortRouterOptions() {
    this.routerOptions.sort((a, b) => ('' + a.name).localeCompare(b.name));
  }
}
