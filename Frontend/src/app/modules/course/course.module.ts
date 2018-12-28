import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ngx-ckeditor';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [CourseComponent, IndexComponent, FormComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    CKEditorModule
  ]
})
export class CourseModule { }
