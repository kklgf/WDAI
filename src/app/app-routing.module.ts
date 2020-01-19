import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseNewComponent } from './course-new/course-new.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { UserRole } from './models/user';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'courses/:id', component: CourseComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'admin/courses',
    component: AdminCoursesComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ADMIN] },
  },
  {
    path: 'admin/courses/new',
    component: CourseNewComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ADMIN] },
  },
  {
    path: 'admin/courses/:id/edit',
    component: CourseEditComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ADMIN] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
