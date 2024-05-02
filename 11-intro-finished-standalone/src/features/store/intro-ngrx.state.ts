import { CounterState, initialCounterState } from "../counter/counter.state";

export interface IntroNgrxState {
  counter: CounterState;
}

export const initialIntroNgrxState: IntroNgrxState = {
  counter: initialCounterState
};
