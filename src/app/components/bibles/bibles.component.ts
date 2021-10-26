import { Component, Input } from '@angular/core';
import { Bible } from 'src/app/interfaces/bibles.interface';

@Component({
  selector: 'app-bibles-select',
  templateUrl: './bibles.component.html',
  styleUrls: ['./bibles.component.scss'],
})
export class BiblesComponent {
  @Input() bibles: Bible[] | undefined;
}
