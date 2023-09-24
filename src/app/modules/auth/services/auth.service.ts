import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, User } from '../interfaces/login-reponse.interface';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiURL:string = environment.apiURL;

  Login(email: string, password: string): Observable<boolean> {
    return this.http.post<LoginResponse>(`${this.apiURL}/auth/login`, {email, password})
    .pipe(
      map(({userData})=> this.setAuthentication(userData.user ,userData.access_token)),
      catchError(err=>{
        return throwError(()=>err.error.message)
      })
    )
  };

  logout(){
    localStorage.clear();
    localStorage.removeItem('user')
  }


  setAuthentication(user: User,token: string): boolean{
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

    return true
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    return token && user;

  }
}
