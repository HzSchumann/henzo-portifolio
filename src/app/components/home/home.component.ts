import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faArrowRight = faArrowRight;

  constructor(private router: Router) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.goToAboutMe();
    }
  }

  onSwipe(event: any): void {
    if (event.direction === 2) {
      this.goToAboutMe();
    }
  }

  goToAboutMe(): void {
    this.router.navigate(['/about-me']);
  }
}
