import { Component, input } from '@angular/core';
import { Quest } from '../../models/quest.models';

@Component({
  selector: 'app-quest-detalhar',
  standalone: true,
  template: `
    @if (quest()) {
      <div style="background: #e8eaf6; padding: 15px; border-radius: 10px;">
        <h3>📜 Detalhes da Missão</h3>
        <p><strong>Nome:</strong> {{ quest()?.texto }}</p>
        <p><strong>Recompensa:</strong> {{ quest()?.xp }} XP</p>
        <p><strong>Status:</strong> {{ quest()?.feita ? 'Concluída' : 'Em andamento' }}</p>
      </div>
    }
  `
})
export class QuestDetalharComponent {
  quest = input<Quest | null>(null);
}