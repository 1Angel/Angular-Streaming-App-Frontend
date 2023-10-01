import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CourseDetails } from '../../interfaces/courses-details.interfaces';
import { VideoDetails } from '../../interfaces/video-details.interface';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.css']
})
export class VideoCommentsComponent implements OnInit{

  @Input()
  public video?: VideoDetails;

  public id?: number;

  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ){}


  myForm: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
  })


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = +params['id']
    });
  }


  CreateComment(){
    const myid: number | undefined = this.id;
    const {description} = this.myForm.value;
    this.courseService.CreateVideoComments(myid, description);
    console.log(this.myForm.value, myid)
  }

}
