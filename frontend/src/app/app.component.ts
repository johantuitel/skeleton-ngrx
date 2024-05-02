import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { fetchEmployees } from '../features/employee/store/employee.actions';
import { SkeletonNgrxModule } from '../features/store/skeleton-ngrx.module';
import { EmployeesComponentsModule } from 'src/features/employee/components/employees-components.module';

class Employee {}
@UntilDestroy()
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SkeletonNgrxModule,
    EmployeesComponentsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(fetchEmployees());
  }

  constructor(private readonly store: Store) {}
}
