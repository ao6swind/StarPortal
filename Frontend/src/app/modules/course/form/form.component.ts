import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  course: Course = new Course();
  teachers: any[] = [];
  seasons: any[] = [];
  series_list: any[] = [];

  constructor(private data: DataService) { 
    this.data.get('course/parameters').subscribe(data => {
      for(let key in data['season']){
        if(data['season'].hasOwnProperty(key)){
          this.seasons.push({
            "id": key,
            "name": data['season'][key]
          });
        }
      }
      for(let key in data['series']){
        if(data['series'].hasOwnProperty(key)){
          this.series_list.push({
            "id": key,
            "name": data['series'][key]
          });
        }
      }
    });
  }

  ngOnInit() {
  }
  addSubSeries(){
    this.course.sub_series.push("");
  }
  removeSubSeries(i){
    this.course.sub_series.splice(i, 1)
  }
  addTeacher(){
    this.course.teachers.push("");
  }
  removeTeacher(i){
    this.course.teachers.splice(i, 1)
  }
}
