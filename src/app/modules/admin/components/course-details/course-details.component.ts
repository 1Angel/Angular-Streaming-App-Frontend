import { Component, Input } from '@angular/core';
import { CourseDetails } from '../../interfaces/CourseDetails-response.interface';

@Component({
  selector: 'admin-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {

  @Input()
  public CourseInfo?: CourseDetails;
}
