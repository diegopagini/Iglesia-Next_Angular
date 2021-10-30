import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Video } from 'src/app/interfaces/youtube.interface';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input()
  video!: Video;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.modifyDescription();
  }

  openDialog(): void {
    this.dialog.open(VideoDialogComponent, {
      data: this.video,
    });
  }

  private modifyDescription(): void {
    const description = this.video.description.split('');
    const icon: any = description.find((el) => el === '▷');
    const index = description.indexOf(icon);
    this.video.description = description.slice(0, index).join('');
  }
}
