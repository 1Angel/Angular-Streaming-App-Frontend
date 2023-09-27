import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { CourseDetails } from '../../interfaces/CourseDetails-response.interface';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.css']
})
export class CourseDetailsPageComponent implements OnInit{

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ){}

  public course?: CourseDetails;


  //get id from params
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.adminService.CourseById(id))
    ).subscribe(course=>{
      this.course = course,
      console.log(course);
    })
  }

    public myForm: FormGroup = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: [, Validators.required]
    })


    UploadVideo(){
      return this.adminService.UploadVideo
    }

}
