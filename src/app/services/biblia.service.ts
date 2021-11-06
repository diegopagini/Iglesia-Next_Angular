import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Passage } from '../interfaces/passage.interface';
import { Bible, Bibles } from '../interfaces/bibles.interface';
import { Results } from '../interfaces/results.interface';
import { Books } from '../interfaces/books.interface';
import { finalize, map, pluck, shareReplay, tap } from 'rxjs/operators';

const baseUrl = environment.bibleUrl;
const apiKey = environment.bibleApiKey;

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  public version: string = 'RVR60';
  private untranslatedBibles: string[] = [
    'asv',
    'ar-vandyke',
    'emphbbl',
    'it-diodati1649',
    'kjv',
    'kjv1900',
    'kjvapoc',
    'lsg',
    'eo-zamenbib',
    'scrmorph',
    'fi-raamattu',
    'bb-sbb-rusbt',
    'scr',
    'wbtc-ptbrnt',
  ];
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getSpecificVerse(passage: string = 'John3.16'): Observable<Passage> {
    return this.http.get<Passage>(
      `${baseUrl}bible/content/${this.version}.js?passage=${passage}&culture=es&key=${apiKey}`
    );
  }

  getBibles(): Observable<Bible[]> {
    return this.http.get<Bibles>(`${baseUrl}/bible/find?key=${apiKey}`).pipe(
      pluck('bibles'),
      map((bibles: Bible[]) => {
        return bibles.filter(
          (bible: Bible) => !this.untranslatedBibles.includes(bible.bible)
        );
      }),
      shareReplay()
    );
  }

  getSearch(query: string, limit: number = 20): Observable<Results> {
    return this.http
      .get<Results>(
        `${baseUrl}/bible/search/${this.version}.txt?query=${query}&mode=verse&start=0&limit=${limit}&key=${apiKey}`
      )
      .pipe(
        tap(() => this.loadingOn()),
        shareReplay(),
        finalize(() => this.loadingOff())
      );
  }

  getBooks(): Observable<Books> {
    return this.http
      .get<Books>(
        `${baseUrl}/bible/contents/${this.version}.js?culture=es&key=${apiKey}`
      )
      .pipe(shareReplay());
  }

  private loadingOn() {
    this.loadingSubject.next(true);
  }

  private loadingOff() {
    this.loadingSubject.next(false);
  }
}
