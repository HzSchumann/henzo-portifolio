import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grateful',
  templateUrl: './grateful.component.html',
  styleUrls: ['./grateful.component.scss']
})
export class GratefulComponent {
  faHome = faHome;
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToCertifications(): void {
    this.router.navigate(['/certifications']);
  }

}
