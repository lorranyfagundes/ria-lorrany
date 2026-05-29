import { Component, input } from '@angular/core';
import { Quest } from '../../models/quest.models';

@Component({
  selector: 'app-quest-detalhar',
  standalone: true,
  template: `
    @if (quest()) {
      <div style="background: #fff9c4; padding: 15px; border-radius: 15px; border: 2px solid #ffd54f;">
        <h4 style="margin: 0; color: #f57c00;">🔍 Detalhes do Loot:</h4>
        <p style="margin: 5px 0 0 0;"><strong>Missão:</strong> {{ quest()?.texto }}</p>
        <p style="margin: 5px 0 0 0;"><strong>Recompensa:</strong> {{ quest()?.xp }} XP ⭐</p>
      </div>
    }
  `
})
export class QuestDetalharComponent {
  // input() 
  quest = input<Quest | null>(null);
}