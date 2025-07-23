import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { addIcons } from 'ionicons';
import { briefcaseOutline, personOutline, peopleOutline, homeOutline, planetOutline, trashOutline } from 'ionicons/icons';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});


addIcons({
  'briefcase-outline': briefcaseOutline,
  'person-outline': personOutline,
  'people-outline': peopleOutline,
  'home-outline': homeOutline,
  'planet-outline': planetOutline,
  'trash-outline': trashOutline
});
