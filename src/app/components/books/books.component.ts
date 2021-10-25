import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Books, Chapter } from 'src/app/interfaces/books.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BooksComponent {
  @Input() books: Books | undefined;
  public panelOpenState: boolean = false;

  constructor(public bibliaService: BibliaService) {}

  public searchChapter(chapter: Chapter) {
    console.log(chapter);
  }
}
