import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/courses.interfaces';
import { environment } from 'src/environments/environment.development';
import { CourseDetails } from '../interfaces/courses-details.interfaces';
import { VideoDetails } from '../interfaces/video-details.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public apiURL: string = environment.apiURL;


  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiURL}/courses`);
  }

  GetCoursesById(id: number):Observable<CourseDetails>{
    return this.http.get<CourseDetails>(`${this.apiURL}/courses/${id}`);
  }

  getVideobyId(id: number): Observable<VideoDetails>{
    return this.http.get<VideoDetails>(`${this.apiURL}/videos/${id}`)
  }


  CreateVideoComments(id: number, description: string){
    return this.http.post(`${this.apiURL}/videos-comments/create/${id}`, {description});
  }
}
