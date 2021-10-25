import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(Boolean), take(1))
      .subscribe((event: any) => {
        const route = event.url;
        console.log(event, route, this.isHomePage);
        if (route === '/home') {
          this.isHomePage = true;
        } else {
          this.isHomePage = false;
        }
      });
  }
}
