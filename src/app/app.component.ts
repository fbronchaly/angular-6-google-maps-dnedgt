

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  name: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}