import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public routerOptions: any[] = [
    {
      name: 'Biblias',
      icon: 'menu_book',
      link: '/bibles',
    },
    {
      name: 'Contenido',
      icon: 'book',
      link: '/content',
    },
  ];
}
