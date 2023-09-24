import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(
    private authservice: AuthService,
    private router: Router
    ){}

  logout(){
    this.authservice.logout();
    this.router.navigateByUrl('');
  }

  loggedIn(){
    return this.authservice.loggedIn();
  }
}
