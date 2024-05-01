import { EmployeeState, initialEmployeeState } from '../employee/public-api';

export interface SkeletonNgrxState {
  employee: EmployeeState;
}

export const initialSkeletonNgrxState: SkeletonNgrxState = {
  employee: initialEmployeeState,
};
