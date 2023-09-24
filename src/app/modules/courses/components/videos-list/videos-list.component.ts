import { Component, Input } from '@angular/core';
import { CourseDetails } from '../../interfaces/courses-details.interfaces';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent {


  @Input()
  public courseInfo?: CourseDetails;
}
