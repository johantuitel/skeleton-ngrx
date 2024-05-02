import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrl: './employee-details.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent { }
