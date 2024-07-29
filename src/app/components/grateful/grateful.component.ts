import { Component, HostListener } from '@angular/core';
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

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.goToHome();
    }

    if (event.key === 'ArrowLeft') {
      this.goToArticles();
    }
  }

  onSwipe(event: any): void {
    if (event.direction === 2) {
      this.goToHome();
    }

    if (event.direction === 4) {
      this.goToArticles();
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToArticles(): void {
    this.router.navigate(['/articles']);
  }

}
