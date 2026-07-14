import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);
  
  // O link correto que você percebeu!
  apiUrl = 'https://sturdy-succotash-746qv4wxqp43wxrp-3000.app.github.dev/login';

  login(usuario: string, senha: string) {
    return this.http.post<any>(this.apiUrl, { usuario, senha }).pipe(
      tap(resposta => {
        if (resposta.token) {
          localStorage.setItem('token', resposta.token);
        }
      })
    );
  }
}