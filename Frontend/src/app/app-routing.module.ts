import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'course',   loadChildren: './modules/course/course.module#CourseModule' },
  { path: 'teacher',  loadChildren: './modules/teacher/teacher.module#TeacherModule' },
  { path: 'student',  loadChildren: './modules/student/student.module#StudentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
