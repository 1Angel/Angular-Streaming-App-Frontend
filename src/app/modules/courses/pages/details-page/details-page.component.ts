import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetails } from '../../interfaces/courses-details.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{

  constructor(
    private courseService: CourseService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ){}

    public courseDetail?: CourseDetails;

  ngOnInit(): void {
    this.activatedroute.params
    .pipe(
      switchMap(({id})=>this.courseService.GetCoursesById(id)),
    ).subscribe(courseid  =>{
      return this.courseDetail = courseid;
    })

  }


}
