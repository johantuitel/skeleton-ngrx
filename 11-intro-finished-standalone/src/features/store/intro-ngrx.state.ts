import { EmployeeState, initialEmployeeState } from "../employee/employee.state";

export interface IntroNgrxState {
  employee: EmployeeState
}

export const initialIntroNgrxState: IntroNgrxState = {
  employee: initialEmployeeState
};
