import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CoursesListComponent } from "./pages/courses-list/courses-list.component";
import { CreateCoursesComponent } from "./pages/create-courses/create-courses.component";
import { CourseDetailsPageComponent } from "./pages/course-details-page/course-details-page.component";

const routes: Routes= [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailsPageComponent
  },
  {
    path: 'create',
    component: CreateCoursesComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{};
