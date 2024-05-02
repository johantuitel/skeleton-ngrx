
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { IntroNgrxEffects } from './intro-ngrx.effects';
import { StoreModule } from '@ngrx/store';
import { FEATURE_STATE_KEY, introNgrxReducer } from './intro-ngrx.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature(IntroNgrxEffects),
    StoreModule.forFeature(FEATURE_STATE_KEY, introNgrxReducer ),
  ],
  providers: []
})
export class IntroNgrxModule {}
