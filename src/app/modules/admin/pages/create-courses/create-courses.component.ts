import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent {

  constructor(
    private adminService: AdminService,
    private router: Router,
    private fb: FormBuilder
  ){}

  public myForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]]
  })


  Create(){
    const {title, description} = this.myForm.value;
    this.adminService.CreateCourse(title, description).subscribe({
      next: ()=> this.router.navigateByUrl('courses')
    })
  }
}
