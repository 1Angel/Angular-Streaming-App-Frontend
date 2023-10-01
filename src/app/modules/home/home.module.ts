import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    CarouselComponent,
    CoursesListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
