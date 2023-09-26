import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ){}

  public myForm: FormGroup = this.fb.group({
    username: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  Register(){
    const {username, email, password} = this.myForm.value;
    this.authService.Register(username, email, password).subscribe({
      next: ()=> this.router.navigateByUrl('/courses')
    })
  }
}
