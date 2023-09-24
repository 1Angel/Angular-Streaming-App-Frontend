import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
  });

  login(){
    const {email, password} = this.myForm.value;
    this.authService.Login(email, password).subscribe({
      next: ()=> this.router.navigateByUrl('/courses')
    })
  }

}
