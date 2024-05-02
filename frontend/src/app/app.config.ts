import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
        maxAge: 250,
        logOnly: true,
        features: {
            pause: false,
            lock: true,
            persist: true,
            jump: true,
        },
    })
    )
  ]
};
