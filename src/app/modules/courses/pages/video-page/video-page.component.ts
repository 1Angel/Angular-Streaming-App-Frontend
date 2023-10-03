import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../interfaces/courses-details.interfaces';
import { VideoDetails } from '../../interfaces/video-details.interface';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit{

  constructor(
    private courseService: CourseService,
    private activatedroute: ActivatedRoute
  ){}

  public videoInfo?: VideoDetails;

  ngOnInit(): void {
    this.activatedroute.params.pipe(
      switchMap(({id})=> this.courseService.getVideobyId(id))
    ).subscribe(video=>{
      this.videoInfo = video;
    })
  }


}
