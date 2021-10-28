import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: { url: string }) => {
        const route = event.url;
        route === '/home'
          ? (this.isHomePage = true)
          : (this.isHomePage = false);
      });
  }
}
