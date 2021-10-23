import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public searching: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.searching = true;
    }, 1500);
  }
}
