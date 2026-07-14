import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  
  // Se tem token, o segurança deixa a tela abrir
  if (token) {
    return true; 
  }
  
  // Se não tem, manda de volta pro login
  router.navigate(['/login']);
  return false;
};