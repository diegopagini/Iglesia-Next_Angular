import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Results } from '../../interfaces/results.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  search: string = '';
  result$: Observable<Results> | undefined;
  loading$: Observable<boolean> | undefined;

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.loading$ = this.bibliaService.loading$;
  }

  getSearch() {
    this.search !== ''
      ? (this.result$ = this.bibliaService.getSearch(this.search))
      : of('');
  }
}
