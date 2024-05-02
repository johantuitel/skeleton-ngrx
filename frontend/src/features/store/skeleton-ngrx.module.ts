
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SkeletonNgrxEffects } from './skeleton-ngrx.effects';
import { StoreModule } from '@ngrx/store';
import { FEATURE_STATE_KEY, skeletonNgrxReducer } from './skeleton-ngrx.reducer';
import { EmployeeService } from '../employee/services/employees-service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFacade } from '../employee/store/employee.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature(SkeletonNgrxEffects),
    StoreModule.forFeature(FEATURE_STATE_KEY, skeletonNgrxReducer ),
  ],
  providers: [
    EmployeeFacade,
    EmployeeService
  ]
})
export class SkeletonNgrxModule {}
