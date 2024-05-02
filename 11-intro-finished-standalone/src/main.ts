import { bootstrapApplication } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { importProvidersFrom } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // provideStore({ counter: counterReducer }),
    // provideEffects([CounterEffects]),
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
  ],
});
