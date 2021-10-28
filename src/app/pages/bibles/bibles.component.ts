import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from 'src/app/interfaces/books.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-bibles',
  templateUrl: './bibles.component.html',
  styleUrls: ['./bibles.component.scss'],
})
export class BiblesComponent implements OnInit {
  books$: Observable<Books> | undefined;

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.books$ = this.bibliaService.getBooks();
  }
}
