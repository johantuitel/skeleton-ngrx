
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SkeletonNgrxEffects } from './skeleton-ngrx.effects';
import { StoreModule } from '@ngrx/store';
import { FEATURE_STATE_KEY, skeletonNgrxReducer } from './skeleton-ngrx.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature(SkeletonNgrxEffects),
    StoreModule.forFeature(FEATURE_STATE_KEY, skeletonNgrxReducer ),
  ],
  providers: []
})
export class SkeletonNgrxModule {}
