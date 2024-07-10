import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.goToCertifications();
    }

    if (event.key === 'ArrowLeft') {
      this.goToAboutMe();
    }
  }

  onSwipe(event: any): void {
    if (event.direction === 2) {
      this.goToCertifications();
    }

    if (event.direction === 4) {
      this.goToAboutMe();
    }
  }

  goToAboutMe(): void {
    this.router.navigate(['/about-me']);
  }

  goToCertifications(): void {
    this.router.navigate(['/certifications']);
  }
}
