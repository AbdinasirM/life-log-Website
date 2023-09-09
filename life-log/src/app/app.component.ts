import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The selector used to insert the component in HTML
  templateUrl: './app.component.html', // The template file for the component
  styleUrls: ['./app.component.scss'] // The styles for the component
})
export class AppComponent {
  title = 'life-log'; // A property named "title" with the value "life-log"
}
