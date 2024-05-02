import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [EmployeesListComponent, EmployeeDetailsComponent],
  imports: [CommonModule],
  exports: [EmployeesListComponent, EmployeeDetailsComponent],
})
export class EmployeesComponentsModule {}
