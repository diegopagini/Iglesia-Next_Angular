import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';

const baseUrl = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  constructor(private http: HttpClient) {}

  public getSpecificVerse(passage: string = 'John3.16'): Observable<string> {
    return this.http
      .get<string>(
        `${baseUrl}bible/content/RVR60.js?passage=${passage}&culture=es&key=${apiKey}`
      )
      .pipe(pluck('text'));
  }
}
