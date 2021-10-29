import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Results } from '../../interfaces/results.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {
  search!: string;
  result$!: Observable<Results>;

  constructor(private bibliaService: BibliaService) {}

  getSearch() {
    this.search !== ''
      ? (this.result$ = this.bibliaService.getSearch(this.search))
      : of('');
  }
}
