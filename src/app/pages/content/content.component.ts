import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from 'src/app/interfaces/books.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public books$: Observable<Books> | undefined;

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.books$ = this.bibliaService.getBooks();
  }
}
