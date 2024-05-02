import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeFacade } from '../../store/employee.facade';
import { Employee } from '../../api/employee';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

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
        private readonly employeeFacade: EmployeeFacade) {}

    ngOnInit(): void {
        this.employeeFacade.getAllEmployees().pipe(untilDestroyed(this)).subscribe(employees => {
            if (employees) {
                this.employees = employees;
                this.changeDetectorReference.detectChanges();
            }
        });
    }

    edit(employee: Employee): void {
    }
    
    remove(id: number): void {
        this.employeeFacade.deleteEmployee(id.toString());
    }
}
