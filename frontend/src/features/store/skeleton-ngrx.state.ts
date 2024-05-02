import { EmployeeState, initialEmployeeState } from "../employee/store/employee.state";

export interface SkeletonNgrxState {
  employee: string;
}

export const initialSkeletonNgrxState: SkeletonNgrxState = {
  employee: '',
};
