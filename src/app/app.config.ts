import { ConfigService } from './service/ConfigService';
import { ApplicationConfig, provideZoneChangeDetection, isDevMode, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient } from '@angular/common/http';


// function initializeApp(configService:ConfigService) {
//   return () => configService.loadConfig();
// }


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:30000'
  })]
  // { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [ConfigService], multi: true }] // ! pra tentar usar um config.json no projeto
};
