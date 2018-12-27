import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL: string = environment.api;

  constructor(private http: HttpClient) { 

  }

  get(model: string){
    return this.http.get(this.apiURL + model);
  }
}
