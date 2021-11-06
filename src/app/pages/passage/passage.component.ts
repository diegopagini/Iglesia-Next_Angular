import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Passage } from 'src/app/interfaces/passage.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-passage',
  templateUrl: './passage.component.html',
  styleUrls: ['./passage.component.scss'],
})
export class PassageComponent implements OnInit {
  passage$: Observable<Passage> | undefined;
  search: string | undefined;

  constructor(
    private bibliaService: BibliaService,
    private store: Store<{ passage: string }>,
    private crf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.passage$ = this.store.select('passage').pipe(
      tap((search: any) => (this.search = search.text)),
      switchMap((passage: any) => {
        return this.bibliaService.getSpecificVerse(passage.text);
      })
    );

    this.crf.detectChanges();

    this.separateNumberFromString();
  }

  private separateNumberFromString() {
    if (this.search) {
      const str = this.search.split('');
      for (let i = 0; i < str.length; i++) {
        if (str[i].match('[0-9]')) {
          str[i] = ' ' + str[i] + ' ';
        }
      }
      // trim the withe spaces between the numbers in the string
      const regex = /(\d)\s+(?=\d)/g;
      const subst = `$1`;
      this.search = str.join('').replace(regex, subst);
    }
  }
}
