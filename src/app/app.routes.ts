import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' } // redireciona a rota vazia para courses
];