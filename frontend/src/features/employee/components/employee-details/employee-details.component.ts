import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeFacade } from '../../store/employee.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrl: './employee-details.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent implements OnInit {
    employeeForm: FormGroup | undefined;
  
    constructor(private readonly formBuilder: FormBuilder,
                private readonly router: Router,
                private readonly employeeFacade: EmployeeFacade) { }
  
    ngOnInit(): void {
      this.employeeForm = this.formBuilder.group({
        id: {value: undefined, disabled: true},
        name: ['', Validators.required],
        department: ['', Validators.required],
        position: ['', Validators.required],
        salary: ['', [Validators.required, Validators.min(0)]]
      });

      this.employeeFacade.getSelectedEmployee().pipe(untilDestroyed(this)).subscribe(selectedEmployee => {
        if (selectedEmployee) {
            this.employeeForm?.setValue({
                id: selectedEmployee.id ?? '',
                name: selectedEmployee.name,
                department: selectedEmployee.department,
                position: selectedEmployee.position,
                salary: selectedEmployee.salary
            });
        }
      });
    }

    cancel(): void {
      this.router.navigateByUrl('/list');
    }
    onSubmit(): void {
        if (this.employeeForm) {
          if (this.employeeForm?.value.id) {
            this.employeeFacade.updateEmployee(this.employeeForm.value);
          } else {
            this.employeeFacade.createEmployee(this.employeeForm.value);
          }
        }
    }
}
