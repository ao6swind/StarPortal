import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [TeacherComponent, IndexComponent, FormComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
