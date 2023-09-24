import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesPageComponent } from "./pages/courses-page/courses-page.component";
import { DetailsPageComponent } from "./pages/details-page/details-page.component";
import { VideoPageComponent } from "./pages/video-page/video-page.component";

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent
  },
  {
    path: ':id',
    component: DetailsPageComponent
  },
  {
    path: 'lesson/:id',
    component: VideoPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule{

}
