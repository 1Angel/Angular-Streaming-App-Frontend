import { Component, OnInit } from '@angular/core';
import { Courses } from '../../interfaces/courses.interfaces';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{

  constructor(
    private homeService: HomeService
  ){}
  ngOnInit(): void {
    this.GetCourses()


  }

  public Courses: Courses[] =[];



  GetCourses(){
    return this.homeService.GetCourses().subscribe(course=>{
      this.Courses = course
    })


  }
}
