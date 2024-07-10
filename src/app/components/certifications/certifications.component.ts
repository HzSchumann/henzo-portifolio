import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  aiCertifications = [
    {
      src: 'https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png',
      alt: 'logo ai fundamentals'
    },
    {
      src: 'https://images.credly.com/images/aa7dfb55-c64e-43a2-800e-51a659505f69/image.png',
      alt: 'logo watsonx.ai sales advanced'
    },
    {
      src: 'https://images.credly.com/images/145a5de8-7390-4d57-b4cb-a10e2f9394e2/image.png',
      alt: 'logo aws partner generative ai essentials'
    },
    {
      src: '../assets/images/certifications/genaipe.png',
      alt: 'logo Generative AI: Prompt Engineering'
    },
    {
      src: '../assets/images/certifications/btcgai.png',
      alt: 'logo generative ai business transformation and career growth'
    },
  ]

  cloudCertifications = [
    {
      src: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
      alt: 'logo aws cloud pratictioner'
    }
  ]

  managementCertifications = [
    {
      src: 'https://static.wixstatic.com/media/74bb6f_850f3a578fdc4bbf89bfd3d392a84af7~mv2.png/v1/fit/w_500,h_500,q_90/file.png',
      alt: 'logo Scrum Foundation Professional Certificate'
    }
  ]

  constructor(private router: Router) { }

  goToExperiences(): void {
    this.router.navigate(['/experiences']);
  }

  goToThanks(): void {
    this.router.navigate(['/thanks']);
  }
}
