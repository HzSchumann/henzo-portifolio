import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.goToExperiences();
    }

    if (event.key === 'ArrowLeft') {
      this.goToHome();
    }
  }

  onSwipe(event: any): void {
    if (event.direction === 4) {
      this.goToExperiences();
    }

    if (event.direction === 2) {
      this.goToHome();
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToExperiences(): void {
    this.router.navigate(['/experiences']);
  }

}
