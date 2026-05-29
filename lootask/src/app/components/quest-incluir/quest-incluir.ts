import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quest } from '../../models/quest.models';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-quest-incluir',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule],
  template: `
    <div style="background: #fff; padding: 20px; border-radius: 15px; border: 3px dashed #ff80ab; margin-bottom: 20px;">
      <h3 style="color: #d81b60; margin-top: 0;">✨ Nova Quest (Incluir)</h3>
      <input type="text" pInputText [(ngModel)]="novaQuestTexto" placeholder="O que você vai fazer, Lorrany?" style="width: 100%; margin-bottom: 10px;" />
      <button pButton label="Aceitar Missão!" icon="pi pi-star" class="p-button-rounded p-button-pink" (click)="enviar()"></button>
    </div>
  `
})
export class QuestIncluirComponent {
  novaQuestTexto = '';
  // output()
  aoIncluir = output<Quest>(); 

  enviar() {
    if (this.novaQuestTexto.trim()) {
      this.aoIncluir.emit({
        texto: this.novaQuestTexto,
        xp: 50, // XP padrão
        feita: false
      });
      this.novaQuestTexto = ''; // Limpa o campo
    }
  }
}