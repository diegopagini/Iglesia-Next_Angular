import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  search!: string;
  result$!: Observable<any>;

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {}

  getSearch() {
    this.search !== ''
      ? (this.result$ = this.bibliaService
          .getSearch(this.search)
          .pipe(tap(console.log)))
      : of('');
  }
}
