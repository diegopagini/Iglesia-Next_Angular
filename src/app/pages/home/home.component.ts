import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    {
      name: 'Más información',
      icon: 'info',
      link: '/information',
    },
    {
      name: 'Peticiones de oración',
      icon: 'support_agent',
      link: '/prayer',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sortRouterOptions();
  }

  goTo(route: string) {
    this.router.navigate([route], { replaceUrl: true });
  }

  private sortRouterOptions() {
    this.routerOptions.sort((a, b) => ('' + a.name).localeCompare(b.name));
  }
}
