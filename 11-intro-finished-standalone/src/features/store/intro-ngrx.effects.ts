import { Type } from '@angular/core';
import { CounterEffects } from '../counter/counter.effects';
import { EmployeeEffects } from '../employee/employee.effects';

export const IntroNgrxEffects: Type<any>[] = [CounterEffects, EmployeeEffects];
