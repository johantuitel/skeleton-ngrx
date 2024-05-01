import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        maxAge: 250,
        logOnly: true,
        features: {
            pause: false,
            lock: true,
            persist: true,
            jump: true,
        },
    }))
  ]
};
