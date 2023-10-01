import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Course } from '../../courses/interfaces/courses.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment.apiURL;


  GetCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiUrl}/courses?limit=4`);
  }
}
