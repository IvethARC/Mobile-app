import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import { briefcaseOutline,
        personOutline,
        peopleOutline, 
        homeOutline, 
        planetOutline, 
        trashOutline, 
        addOutline, 
        readerOutline, 
        createOutline, 
        closeOutline, 
        alertCircleOutline,
        pricetagsOutline
      } from 'ionicons/icons';
import { StorageModule } from './app/storage/storage.module';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(StorageModule),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ]
});

addIcons({
  'briefcase-outline': briefcaseOutline,
  'person-outline': personOutline,
  'people-outline': peopleOutline,
  'home-outline': homeOutline,
  'planet-outline': planetOutline,
  'trash-outline': trashOutline,
  'add-outline': addOutline,
  'reader-outline': readerOutline,
  'create-outline': createOutline,
  'close-outline': closeOutline,
  'alert-circle-outline': alertCircleOutline,
  'pricetags-outline': pricetagsOutline
});
