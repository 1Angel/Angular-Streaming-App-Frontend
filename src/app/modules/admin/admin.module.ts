import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { CreateCoursesComponent } from './pages/create-courses/create-courses.component';



@NgModule({
  declarations: [
    CoursesListComponent,
    CreateCoursesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
