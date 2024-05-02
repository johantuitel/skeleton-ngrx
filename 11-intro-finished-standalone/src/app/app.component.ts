import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IntroNgrxModule } from 'src/features/store/intro-ngrx.module';
import { fetchEmployees } from 'src/features/employee/employee.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [IntroNgrxModule],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(fetchEmployees());
  }

  constructor(private store: Store) {}
}
