import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

export const rolesGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user')!);

  if(user.roles =='admin'){
    console.log(user);
    return true;
  }

  router.navigateByUrl('');
  return false;

};
