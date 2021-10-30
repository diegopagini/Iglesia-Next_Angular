import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Video } from 'src/app/interfaces/youtube.interface';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit, OnDestroy {
  videos: Video[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this.youtubeService
      .getVideos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response: any[]) => {
        this.videos.push(...response);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
