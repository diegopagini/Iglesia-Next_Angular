import { Component, Input } from '@angular/core';
import { Books, Chapter } from 'src/app/interfaces/books.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  @Input() books: Books | undefined;
  public panelOpenState: boolean = false;

  public searchChapter(chapter: Chapter) {
    console.log(chapter);
  }
}
