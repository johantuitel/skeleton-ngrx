import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from '../features/employee/api/types/employee';
import { EmployeeService } from '../features/employee/services/employees-service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EmployeeFacade } from '../features/employee/store/employee.facade';
import { SkeletonNgrxModule } from '../features/store/skeleton-ngrx.module';

@UntilDestroy()
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule, SkeletonNgrxModule],
  providers: [
    EmployeeService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'skeleton-ngrx';

  employees: Array<Employee> = [];
  employee: Employee = {
    id: 0,
    name: '',
    department: '',
    position: '',
    salary: 0
  };

  constructor(private readonly employeeFacade: EmployeeFacade) {}

  ngOnInit(): void {
    this.employeeFacade.getAllEmployees().pipe(untilDestroyed(this)).subscribe(employees => {
      if (employees) {
        this.employees = employees;
      }
    });
  }
}
