import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [CourseComponent, IndexComponent, FormComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
  ]
})
export class CourseModule { }
