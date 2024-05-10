import { Routes } from '@angular/router';
import { EmployeesComponentsModule } from '../features/employee/components/employees-components.module';

export const routes: Routes = [{
    path: '',
    loadChildren: () => import('../features/employee/components/employees-components.module').then(m => EmployeesComponentsModule)
}];
