import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from 'src/app/interfaces/youtube.interface';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
  videos$!: Observable<Video[]>;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this.videos$ = this.youtubeService.getVideos();
  }
}
