import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

import { IntroNgrxState } from 'src/features/store/intro-ngrx.state';
import { selectCount, selectCountDouble } from 'src/features/counter/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor(private store: Store<IntroNgrxState>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectCountDouble);
  }
}
