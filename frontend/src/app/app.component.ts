import { Component } from '@angular/core';
import { EmployeesComponentsModule } from 'src/features/employee/components/employees-components.module';
import { SkeletonNgrxModule } from '../features/store/skeleton-ngrx.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    SkeletonNgrxModule,
    EmployeesComponentsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
