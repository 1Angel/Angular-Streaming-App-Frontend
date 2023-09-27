import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CreateCourseResponse } from '../interfaces/createCourse-response.interface';
import { CourseDetails } from '../interfaces/CourseDetails-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiURL;


  CreateCourse(title: string, description: string){
    return this.http.post(`${this.apiUrl}/courses/create`, {title, description});
  }

  CourseById(id: number): Observable<CourseDetails>{
    return this.http.get<CourseDetails>(`${this.apiUrl}/courses/${id}`)
  }

  UploadVideo(id: number){
    return this.http.get(`${this.apiUrl}/videos/upload/${id}`);
  }
}
