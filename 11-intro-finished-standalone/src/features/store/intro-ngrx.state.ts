import { CounterState, initialCounterState } from "../counter/counter.state";
import { EmployeeState, initialEmployeeState } from "../employee/employee.state";

export interface IntroNgrxState {
  counter: CounterState;
  employee: EmployeeState
}

export const initialIntroNgrxState: IntroNgrxState = {
  counter: initialCounterState,
  employee: initialEmployeeState
};
