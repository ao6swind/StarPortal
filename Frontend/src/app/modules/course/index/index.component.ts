import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public courses: any

  constructor(private data: DataService) { 
    this.data.get('course').subscribe(
      data => { this.courses = data },
      error => { console.error(error) }  
    );
  }

  ngOnInit() {
    
  }

}
