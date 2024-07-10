import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GratefulComponent } from './components/grateful/grateful.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    'swipe': { direction: 31 } // Configura o HammerJS para reconhecer todos os tipos de swipe
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CertificationsComponent,
    HomeComponent,
    GratefulComponent,
    ExperiencesComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
