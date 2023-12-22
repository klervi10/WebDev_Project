import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_webdev_api_food';
  isComponentVisible = false;

  CarteMonde = 'assets/CarteMonde/CarteMonde.png';
  GlobeLogo = 'assets/GlobeLogo/GlobeLogo.png';
  Instagram = 'assets/Instagram/Instagram.png';
  Linkedin = 'assets/Linkedin/Linkedin.png';
  Mail = 'assets/Mail/Mail.png';
  Facebook = 'assets/Facebook/Facebook.png';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    this.isComponentVisible = documentHeight - windowHeight - scrollPosition <= 0;
  }
}
