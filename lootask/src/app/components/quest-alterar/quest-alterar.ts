import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quest } from '../../models/quest.models';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button'; 

@Component({
  selector: 'app-quest-alterar',
  standalone: true,
  imports: [FormsModule, InputTextModule, InputNumberModule, CheckboxModule, ButtonModule],
  template: `
    @if (quest()) {
      <div style="background: #fff; padding: 20px; border-radius: 15px; border: 3px solid #ba68c8; margin-top: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <h3 style="color: #6a1b9a; margin-top: 0;">🔮 Editar Quest (Alterar)</h3>
        
        <div style="margin-bottom: 12px;">
          <label style="display:block; font-weight:bold; color: #6a1b9a; margin-bottom: 5px;">Missão:</label>
          <input type="text" pInputText [(ngModel)]="quest()!.texto" style="width: 100%;" />
        </div>

        <div style="margin-bottom: 12px;">
          <label style="display:block; font-weight:bold; color: #6a1b9a; margin-bottom: 5px;">Recompensa (XP):</label>
          <p-inputNumber [(ngModel)]="quest()!.xp" style="width: 100%;" [min]="0"></p-inputNumber>
        </div>

        <div style="display: flex; align-items: center; gap: 10px; margin-top: 15px; margin-bottom: 20px;">
          <p-checkbox [(ngModel)]="quest()!.feita" [binary]="true" inputId="feita"></p-checkbox>
          <label for="feita" style="font-weight: bold; cursor: pointer; color: #4a148c;">✨ Concluída (Loot Coletado!)</label>
        </div>

        <div style="display: flex; gap: 10px; justify-content: flex-end;">
          <button pButton label="Fechar" icon="pi pi-times" class="p-button-text p-button-secondary" (click)="fechar()"></button>
          <button pButton label="Concluir Edição" icon="pi pi-check" class="p-button-purple" (click)="fechar()"></button>
        </div>
      </div>
    }
  `
})
export class QuestAlterarComponent {
  quest = model<Quest | null>(null);

  fechar() {
    this.quest.set(null);
  }
}