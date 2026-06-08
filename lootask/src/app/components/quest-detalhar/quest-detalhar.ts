import { Component, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuestService } from '../../services/quest';

@Component({
  selector: 'app-quest-detalhar',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (quest()) {
      <div style="background: #e8eaf6; padding: 20px; border-radius: 15px; border: 3px solid #c5cae9;">
        <h3>📜 Detalhes da Missão</h3>
        <p><strong>Nome:</strong> {{ quest()?.texto }}</p>
        <p><strong>Recompensa:</strong> {{ quest()?.xp }} XP</p>
        <p><strong>Status:</strong> {{ quest()?.feita ? 'Concluída' : 'Em andamento' }}</p>
        
        <button routerLink="/quests" style="margin-top: 10px; background: #3f51b5; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Voltar</button>
      </div>
    } @else {
      <p>Quest não encontrada.</p>
    }
  `
})
export class QuestDetalharComponent {
  questService = inject(QuestService);

  id = input<string>(); 

  quest = computed(() => {
    return this.questService.buscarPorId(Number(this.id()));
  });
}