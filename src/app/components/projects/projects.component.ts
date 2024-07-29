import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.goToCertifications();
    }

    if (event.key === 'ArrowLeft') {
      this.goToExperiences();
    }
  }

  onSwipe(event: any): void {
    if (event.direction === 2) {
      this.goToCertifications();
    }

    if (event.direction === 4) {
      this.goToExperiences();
    }
  }

  goToExperiences(): void {
    this.router.navigate(['/experiences']);
  }

  goToCertifications(): void {
    this.router.navigate(['/certifications']);
  }

}
