import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Passage } from '../interfaces/passage.interface';
import { Bibles } from '../interfaces/bibles.interface';
import { Results } from '../interfaces/results.interface';
import { Books } from '../interfaces/books.interface';

const baseUrl = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  constructor(private http: HttpClient) {}

  public getSpecificVerse(passage: string = 'John3.16'): Observable<Passage> {
    return this.http.get<Passage>(
      `${baseUrl}bible/content/RVR60.js?passage=${passage}&culture=es&key=${apiKey}`
    );
  }

  public getBibles(): Observable<Bibles> {
    return this.http.get<Bibles>(`${baseUrl}/bible/find?key=${apiKey}`);
  }

  public getSearch(query: string, limit: number = 20): Observable<Results> {
    return this.http.get<Results>(
      `${baseUrl}/bible/search/LEB.txt?query=${query}&mode=verse&start=0&limit=${limit}&key=${apiKey}`
    );
  }

  public getBooks(): Observable<Books> {
    return this.http.get<Books>(`${baseUrl}/bible/contents/LEB?key=${apiKey}`);
  }
}
