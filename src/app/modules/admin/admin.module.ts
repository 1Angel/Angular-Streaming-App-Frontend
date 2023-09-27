import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { CreateCoursesComponent } from './pages/create-courses/create-courses.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    CoursesListComponent,
    CreateCoursesComponent,
    CourseDetailsPageComponent,
    CourseDetailsComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,    MatListModule,
  ]
})
export class AdminModule { }
