import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Passage } from 'src/app/interfaces/passage.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-passage',
  templateUrl: './passage.component.html',
  styleUrls: ['./passage.component.scss'],
})
export class PassageComponent implements OnInit {
  public passage$: Observable<Passage> | undefined;

  constructor(
    private bibliaService: BibliaService,
    private store: Store<{ passage: string }>
  ) {}

  ngOnInit(): void {
    this.passage$ = this.store.select('passage').pipe(
      switchMap((passage: any) => {
        return this.bibliaService.getSpecificVerse(passage.text);
      })
    );
  }
}
