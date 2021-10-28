import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Books, Chapter } from 'src/app/interfaces/books.interface';
import { BibliaService } from 'src/app/services/biblia.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BooksComponent {
  @Input() books: Books | undefined;
  panelOpenState: boolean = false;

  constructor(
    public bibliaService: BibliaService,
    private storeService: StoreService,
    private router: Router
  ) {}

  searchChapter(chapter: Chapter) {
    const query = chapter.passage.replace(' ', '');
    this.storeService.searchPassage(query);
    this.router.navigateByUrl('/passage');
  }
}
