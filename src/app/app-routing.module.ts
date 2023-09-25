import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { AboutPageComponent } from './modules/home/pages/about-page/about-page.component';
import { rolesGuard } from './core/guards/roles.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'courses',
    canActivate: [authGuard],
    loadChildren: ()=> import('./modules/courses/courses.module').then(c=>c.CoursesModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./modules/auth/auth.module').then(a=>a.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [rolesGuard],
    loadChildren: ()=> import('./modules/admin/admin.module').then(ad=>ad.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'courses'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
