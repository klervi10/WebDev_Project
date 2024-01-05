/* Import necessary Angular modules and services*/
import { Component } from '@angular/core';

/* Component decorator with metadata */
@Component({
  selector: 'app-about', /* Angular component selector used in HTML */
  templateUrl: './about.component.html', /* Path to the HTML template file */
  styleUrls: ['./about.component.css'] /* Array of paths to external CSS style files */
})
export class AboutComponent {
/* here, our component doesn't require any additional logic or properties so we leave it empty */
}

