import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// ATENÇÃO: Confirme se o caminho do seu AuthService está certo aqui:
import { AuthService } from '../../services/auth'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>✨ Acesso ao Sistema</h2>
        <p class="subtitle">Faça login para gerenciar suas Quests</p>
        
        <div class="input-group">
          <label>Usuário</label>
          <input type="text" [(ngModel)]="usuario" placeholder="Ex: admin" />
        </div>

        <div class="input-group">
          <label>Senha</label>
          <input type="password" [(ngModel)]="senha" placeholder="Ex: 123" />
        </div>

        <button (click)="entrar()" class="btn-login">Entrar</button>
        
        @if (erro) {
          <p class="error-msg">⚠️ {{ erro }}</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f3f4f6;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: -8px; /* Remove margens padrão do body caso existam */
    }
    
    .login-card {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 350px;
      text-align: center;
    }

    h2 { 
      color: #333; 
      margin-top: 0;
      margin-bottom: 5px; 
    }

    .subtitle { 
      color: #666; 
      font-size: 14px; 
      margin-bottom: 25px; 
    }

    .input-group {
      text-align: left;
      margin-bottom: 15px;
    }

    .input-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 600;
      color: #444;
      font-size: 14px;
    }

    .input-group input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box; /* Evita que o input vaze da tela */
      font-size: 15px;
      transition: border-color 0.3s;
    }

    .input-group input:focus {
      outline: none;
      border-color: #512da8;
    }

    .btn-login {
      width: 100%;
      padding: 12px;
      background-color: #512da8;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s, transform 0.1s;
      margin-top: 10px;
    }

    .btn-login:hover {
      background-color: #311b92;
    }

    .btn-login:active {
      transform: scale(0.98);
    }

    .error-msg {
      color: #d32f2f;
      font-weight: 600;
      font-size: 14px;
      margin-top: 15px;
      margin-bottom: 0;
    }
  `]
})
export class LoginComponent {
  usuario = '';
  senha = '';
  erro = '';
  authService = inject(AuthService);
  router = inject(Router);

  entrar() {
    this.authService.login(this.usuario, this.senha).subscribe({
      next: () => this.router.navigate(['/quests']),
      error: () => this.erro = 'Usuário ou senha incorretos!'
    });
  }
}