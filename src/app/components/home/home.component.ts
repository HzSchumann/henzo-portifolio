import { Component } from '@angular/core';
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

  goToAboutMe(): void {
    this.router.navigate(['/about-me']);
  }
}
