import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoCommentsComponent } from './components/video-comments/video-comments.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailsPageComponent,
    CoursesPageComponent,
    VideoPageComponent,
    CoursesListComponent,
    VideosListComponent,
    VideoPlayerComponent,
    VideoCommentsComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class CoursesModule { }
