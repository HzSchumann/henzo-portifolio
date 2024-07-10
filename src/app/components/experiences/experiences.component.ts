import { Component } from '@angular/core';
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

  goToAboutMe(): void {
    this.router.navigate(['/about-me']);
  }

  goToCertifications(): void {
    this.router.navigate(['/certifications']);
  }
}
