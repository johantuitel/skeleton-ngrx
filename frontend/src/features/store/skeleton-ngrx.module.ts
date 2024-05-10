
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SkeletonNgrxEffects } from './skeleton-ngrx.effects';
import { FEATURE_STATE_KEY, skeletonNgrxReducer } from './skeleton-ngrx.reducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature(SkeletonNgrxEffects),
    StoreModule.forFeature(FEATURE_STATE_KEY, skeletonNgrxReducer ),
  ],
})
export class SkeletonNgrxModule {}
