import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeFacade } from '../../store/employee.facade';
import { Employee } from '../../api/employee';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
    selector: 'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrl: './employees-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent implements OnInit {
    employees: Array<Employee> = [];
    constructor(private readonly changeDetectorReference: ChangeDetectorRef,
        private readonly router: Router,
        private readonly employeeFacade: EmployeeFacade) {}

    ngOnInit(): void {
        this.employeeFacade.fetchEmployees();
        this.employeeFacade.getAllEmployees().pipe(untilDestroyed(this)).subscribe(employees => {
            if (employees) {
                this.employees = employees;
                this.changeDetectorReference.detectChanges();
            }
        });
    }

    new(): void {
        this.employeeFacade.selectEmployee({
            id: undefined,
            name: '',
            department: '',
            position: '',
            salary: 0
        });
    }

    edit(employee: Employee): void {
        this.employeeFacade.selectEmployee(employee);
    }
    
    remove(id: number | undefined): void {
        if (id) {
            this.employeeFacade.deleteEmployee(id.toString());
        }
    }
}
