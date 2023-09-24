import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/courses.interfaces';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {

  @Input()
  public CourseList: Course[] =[];

}
