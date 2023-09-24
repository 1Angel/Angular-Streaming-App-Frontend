import { Component, Input } from '@angular/core';
import { CourseDetails } from '../../interfaces/courses-details.interfaces';
import { VideoDetails } from '../../interfaces/video-details.interface';

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.css']
})
export class VideoCommentsComponent {

  @Input()
  public video?: VideoDetails;
}
