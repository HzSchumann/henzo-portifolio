import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { HomeComponent } from './components/home/home.component';
import { GratefulComponent } from './components/grateful/grateful.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'thanks', component: GratefulComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
