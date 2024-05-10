import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFacade } from '../store/employee.facade';
import { EmployeeService } from '../services/employees-service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        pathMatch: 'full',
        component: EmployeesListComponent,
    },
    {
        path: 'details',
        pathMatch: 'full',
        component: EmployeeDetailsComponent,
    },
];
@NgModule({
  declarations: [EmployeesListComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [EmployeesListComponent, EmployeeDetailsComponent],
  providers: [
    EmployeeFacade,
    EmployeeService
  ]
})
export class EmployeesComponentsModule {}
