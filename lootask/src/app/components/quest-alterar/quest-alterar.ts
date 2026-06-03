import { Component, inject, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestService } from '../../services/quest';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';   
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-quest-alterar',
  standalone: true,
  imports: [FormsModule, ButtonModule, CheckboxModule, InputTextModule, InputNumberModule], // ✨ Adicionados aqui
  template: `
    @if (questService.questSelecionada(); as q) {
      <div style="background: #f3e5f5; padding: 20px; border-radius: 15px; border: 3px solid #e1bee7; margin-top: 15px;">
        <h3 style="color: #4a148c; margin-top: 0;">🛠️ Editar / Remover Quest</h3>
        
        <div style="margin-bottom: 12px;">
          <input type="text" pInputText [ngModel]="textoTemp()" (ngModelChange)="textoTemp.set($event)" style="width: 100%;"/>
        </div>
        
        <div style="margin-bottom: 12px;">
          <p-inputNumber [ngModel]="xpTemp()" (ngModelChange)="xpTemp.set($event)" placeholder="XP de recompensa" style="width: 100%;"></p-inputNumber>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label style="display: flex; align-items: center; gap: 8px; color: #4a148c; cursor: pointer;">
            <p-checkbox [binary]="true" [ngModel]="feitaTemp()" (ngModelChange)="feitaTemp.set($event)"></p-checkbox>
            Marcar como concluída
          </label>
        </div>
        
        <div style="display: flex; gap: 10px;">
          <button pButton label="Salvar Alterações" icon="pi pi-check" class="p-button-success" (click)="salvar(q.id)"></button>
          
          <button pButton label="Excluir Missão" icon="pi pi-trash" class="p-button-danger" style="background: #d32f2f;" (click)="deletar(q.id)"></button>
        </div>
      </div>
    }
  `
})
export class QuestAlterarComponent {
  questService = inject(QuestService);

  textoTemp = signal('');
  xpTemp = signal<number | null>(null); // ✨ Criado o signal do XP
  feitaTemp = signal(false);

  constructor() {
    effect(() => {
      const q = this.questService.questSelecionada();
      if (q) {
        this.textoTemp.set(q.texto);
        this.xpTemp.set(q.xp);
        this.feitaTemp.set(q.feita);
      }
    });
  }

  salvar(id: any) {
    this.questService.atualizarQuest({
      id: id,
      texto: this.textoTemp(),
      xp: this.xpTemp() || 0, 
      feita: this.feitaTemp()
    });
  }

  deletar(id: any) {
    this.questService.removerQuest(id);
  }
}