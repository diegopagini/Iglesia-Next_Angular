import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bibles } from 'src/app/interfaces/bibles.interface';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public bibles$: Observable<Bibles> | undefined;

  constructor(private bibliaService: BibliaService) {}

  ngOnInit(): void {
    this.bibles$ = this.bibliaService.getBibles();
  }
}
