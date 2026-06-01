import { Component, output, signal } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { Quest } from '../../models/quest.models';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-quest-incluir',
  standalone: true,
  imports: [FormsModule, InputTextModule, InputNumberModule, ButtonModule],
  template: `
    <div style="background: #fff; padding: 20px; border-radius: 15px; border: 3px solid #f8bbd0; margin-bottom: 20px;">
      <h3 style="color: #d81b60; margin-top: 0;">🎯 Nova Quest</h3>
      
      <div style="margin-bottom: 12px;">
        <input type="text" pInputText [ngModel]="novaQuestTexto()" (ngModelChange)="novaQuestTexto.set($event)" placeholder="Digite a missão..." style="width: 100%;" />
      </div>

      <div style="margin-bottom: 12px; display: flex; gap: 10px; align-items: center;">
        <p-inputNumber [ngModel]="novaQuestXp()" (ngModelChange)="novaQuestXp.set($event)" placeholder="XP de recompensa" style="flex: 1;"></p-inputNumber>
        
        <button pButton label="Aceitar" icon="pi pi-plus" class="p-button-pink" (click)="enviar()"></button>
      </div>
    </div>
  `
})
export class QuestIncluirComponent {
  aoIncluir = output<Quest>();
  novaQuestTexto = signal<string>('');
  novaQuestXp = signal<number | null>(null);

  enviar() {
    if (this.novaQuestTexto().trim()) {
      this.aoIncluir.emit({
        texto: this.novaQuestTexto(),
        xp: this.novaQuestXp() || 0,
        feita: false 
      });

      this.novaQuestTexto.set('');
      this.novaQuestXp.set(null);
    }
  }
}