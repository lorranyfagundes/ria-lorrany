import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestService } from '../../services/quest';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quest-incluir',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div style="background: white; padding: 20px; border-radius: 15px; border: 3px solid #ffb7d5; max-width: 400px; margin: 20px auto;">
      <h3 style="color: #ff2a6d; display: flex; align-items: center; gap: 8px;">🎯 Nova Quest</h3>
      
      <div style="margin-bottom: 10px;">
        <input type="text" [(ngModel)]="novaQuestTexto" placeholder="Nome da quest" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>

      <div style="margin-bottom: 15px;">
        <input type="number" [(ngModel)]="novaQuestXp" placeholder="XP" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>

      <div style="display: flex; gap: 10px;">
        <button (click)="enviar()" style="background: #ff2a6d; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">Aceitar</button>
        <button routerLink="/quests" style="background: #666; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Voltar</button>
      </div>
    </div>
  `
})
export class QuestIncluirComponent {
  questService = inject(QuestService);
  router = inject(Router);

  // Variáveis super simples, sem signal, pro ngModel funcionar liso de primeira:
  novaQuestTexto = '';
  novaQuestXp: number | null = null;

  enviar() {
    if (this.novaQuestTexto.trim()) {
      // ✨ Usando o método inserir() do seu novo Service
      this.questService.inserir({
        texto: this.novaQuestTexto,
        xp: this.novaQuestXp || 0,
        feita: false
      }).subscribe({
        next: () => this.router.navigate(['/quests']),
        error: (err: any) => console.error('Erro ao salvar no servidor:', err)
      });
    }
  }
}