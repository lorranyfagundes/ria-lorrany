import { Component, inject } from '@angular/core';
import { QuestService } from '../../services/quest';

@Component({
  selector: 'app-quest-detalhar',
  standalone: true,
  template: `
    @if (questService.questSelecionada(); as q) {
      <div style="background: #e8eaf6; padding: 15px; border-radius: 10px;">
        <h3>📜 Detalhes da Missão</h3>
        <p><strong>Nome:</strong> {{ q.texto }}</p>
        <p><strong>Recompensa:</strong> {{ q.xp }} XP</p>
        <p><strong>Status:</strong> {{ q.feita ? 'Concluída' : 'Em andamento' }}</p>
      </div>
    }
  `
})
export class QuestDetalharComponent {
  questService = inject(QuestService);
}