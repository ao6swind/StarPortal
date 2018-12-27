import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [StudentComponent, IndexComponent, FormComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
