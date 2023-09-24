import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VideoDetails } from '../../interfaces/video-details.interface';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnChanges{

  @Input()
  public video?: VideoDetails;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.video);
  }
}
