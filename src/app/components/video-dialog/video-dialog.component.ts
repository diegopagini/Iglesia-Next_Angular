import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from 'src/app/interfaces/youtube.interface';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
})
export class VideoDialogComponent implements OnInit {
  youtubeUrl: string = 'https://www.youtube.com/embed/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Video,
    private dialogRef: MatDialogRef<VideoDialogComponent>
  ) {}

  ngOnInit(): void {
    this.youtubeUrl += this.data.resourceId.videoId;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
