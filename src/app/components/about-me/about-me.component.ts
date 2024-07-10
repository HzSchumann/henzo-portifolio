import { Component } from '@angular/core';
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

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToExperiences(): void {
    this.router.navigate(['/experiences']);
  }

}
