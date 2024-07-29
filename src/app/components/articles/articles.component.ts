import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) { }

  posts = [
    {
      src: '../../../assets/images/posts/post01.jpeg',
      alt: 'imagem de sistema neural verde',
      title: 'Um Guia Básico para os Conceitos de uma Rede Neural',
      description: 'Vamos explorar de forma visual e interativa os conceitos básicos de uma rede neural, utilizando exemplos para ilustrar como essas ferramentas poderosas funcionam.',
      href: 'https://brains.dev/2024/um-guia-basico-para-os-conceitos-de-uma-rede-neural/'
    },
  ]

  public navigateTo(url: string) {
    window.open(url, '_blank');
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.goToThanks();
    }

    if (event.key === 'ArrowLeft') {
      this.goToCertifications();
    }
  }

  onSwipe(event: any): void {
    if (event.direction === 2) {
      this.goToThanks();
    }

    if (event.direction === 4) {
      this.goToCertifications();
    }
  }

  goToCertifications(): void {
    this.router.navigate(['/certifications']);
  }

  goToThanks(): void {
    this.router.navigate(['/thanks']);
  }

}
