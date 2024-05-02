import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { IntroNgrxModule } from 'src/features/store/intro-ngrx.module';
import { init } from 'src/features/counter/counter.actions';
import { fetchEmployees } from 'src/features/employee/employee.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CounterOutputComponent, CounterControlsComponent, IntroNgrxModule],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(init());
    this.store.dispatch(fetchEmployees());
  }

  constructor(private store: Store) {}
}
