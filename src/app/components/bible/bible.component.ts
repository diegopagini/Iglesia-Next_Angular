import { Component, Input } from '@angular/core';
import { Bible } from 'src/app/interfaces/bibles.interface';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss'],
})
export class BibleComponent {
  @Input() bible: Bible | undefined;
}
