import { FEATURE_STATE_KEY, skeletonNgrxReducer } from './skeleton-ngrx.reducer';

import { CommonModule } from '@angular/common';
import { SkeletonNgrxEffects } from './skeleton-ngrx.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature(SkeletonNgrxEffects),
    StoreModule.forFeature(FEATURE_STATE_KEY, skeletonNgrxReducer ),
  ],
  providers: []
})
export class SkeletonNgrxModule {}
