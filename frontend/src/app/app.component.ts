import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SkeletonNgrxModule } from '../features/store/skeleton-ngrx.module';

class Employee {}
@UntilDestroy()
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SkeletonNgrxModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skeleton-ngrx';

  employees: Array<Employee> = [];
  employee: Employee = {
    id: 0,
    name: '',
    department: '',
    position: '',
    salary: 0,
  };
}
