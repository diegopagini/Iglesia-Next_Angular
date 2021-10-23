import { Component, OnInit } from '@angular/core';
import { BibliaService } from 'src/app/services/biblia.service';
import { Observable } from 'rxjs';
import { Book, Books, Chapter } from 'src/app/interfaces/books.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public books$: Observable<Books> | undefined;
  public panelOpenState: boolean = false;

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.books$ = this.bibliaService.getBooks();
  }

  public searchChapter(chapter: Chapter) {
    console.log(chapter);
  }
}
