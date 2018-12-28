import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      { path: 'create', component: FormComponent },
      { path: '', component: IndexComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
