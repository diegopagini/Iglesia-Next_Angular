import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { YoutubeResponse } from '../interfaces/youtube.interface';

const baseUrl = environment.youtubeUrl;
const apiKey = environment.youtubeApiKey;
const playList = environment.youtubePlaylist;

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private newPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${baseUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '100')
      .set('playlistId', playList)
      .set('key', apiKey);
    return this.http.get<YoutubeResponse>(url, { params }).pipe(
      map((resp) => {
        this.newPageToken = resp.nextPageToken;
        return resp.items;
      }),
      map((items) => {
        return items.map((video) => video.snippet);
      })
    );
  }
}
