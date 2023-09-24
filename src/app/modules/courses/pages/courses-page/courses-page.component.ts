import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/courses.interfaces';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit{

  constructor(private courseService: CourseService){}

  public courses: Course[] = [];

  ngOnInit(): void {
    this.getCourses()
  }


  getCourses(){
    this.courseService.getCourses().subscribe(course=>{
      this.courses = course;
    })
  }


}
