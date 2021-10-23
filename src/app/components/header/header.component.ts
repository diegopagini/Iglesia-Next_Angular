import { Component, OnInit } from '@angular/core';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public searching: boolean = false;

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.bibliaService.getBooks().subscribe(console.log);

    setTimeout(() => {
      this.searching = true;
    }, 1500);
  }
}
