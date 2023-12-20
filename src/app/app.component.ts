import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_webdev_api_food';
  isComponentVisible = false;
 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
 
    this.isComponentVisible = documentHeight - windowHeight - scrollPosition <= 0;
  }



}

