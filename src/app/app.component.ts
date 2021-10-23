import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.url;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'biblia';
}
