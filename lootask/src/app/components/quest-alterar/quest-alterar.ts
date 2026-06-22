import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { QuestService } from '../../services/quest';

@Component({
  selector: 'app-quest-alterar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div style="background: white; padding: 20px; border-radius: 15px; border: 3px solid #b39ddb; max-width: 400px; margin: 20px auto;">
      <h3 style="color: #512da8; display: flex; align-items: center; gap: 8px;">🛠️ Editar / Remover Quest</h3>
      
      <div style="margin-bottom: 10px;">
        <label style="display: block; font-weight: bold; margin-bottom: 5px; color: #512da8;">Nome da Quest</label>
        <input type="text" [(ngModel)]="textoTemp" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>

      <div style="margin-bottom: 15px;">
        <label style="display: block; font-weight: bold; margin-bottom: 5px; color: #512da8;">XP de recompensa</label>
        <input type="number" [(ngModel)]="xpTemp" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>

      <div style="margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
        <input type="checkbox" id="concluida" [(ngModel)]="feitaTemp" style="transform: scale(1.2); cursor: pointer;" />
        <label for="concluida" style="cursor: pointer; user-select: none;">Marcar como concluída</label>
      </div>

      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button (click)="salvar()" style="background: #4caf50; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">✔️ Salvar</button>
        <button (click)="deletar()" style="background: #f44336; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">🗑️ Excluir</button>
        <button routerLink="/quests" style="background: #666; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Cancelar</button>
      </div>
    </div>
  `
})
export class QuestAlterarComponent implements OnInit {
  questService = inject(QuestService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  // ✨ MUDAMOS PARA 'any' PARA ACEITAR LETRAS E NÚMEROS DO JSON-SERVER
  questId: any; 

  textoTemp = '';
  xpTemp: number | null = null;
  feitaTemp = false;

  ngOnInit() {
    // ✨ TIRAMOS O Number() PARA NÃO QUEBRAR O ID AUTOMÁTICO
    this.questId = this.route.snapshot.paramMap.get('id');

    if (this.questId && this.questId !== 'undefined') {
      this.questService.buscarPorId(this.questId).subscribe(q => {
        if (q) {
          this.textoTemp = q.texto;
          this.xpTemp = q.xp;
          this.feitaTemp = q.feita;
        }
      });
    }
  }

  salvar() {
    if (this.textoTemp.trim()) {
      this.questService.atualizar({
        id: this.questId, // Agora o ID vai certinho, com letras ou não
        texto: this.textoTemp,
        xp: this.xpTemp || 0,
        feita: this.feitaTemp
      }).subscribe({
        next: () => this.router.navigate(['/quests']),
        error: (err: any) => console.error('Erro ao atualizar quest:', err)
      });
    }
  }

  deletar() {
    const confirmar = confirm('Tem certeza que deseja deletar esta quest?');
    if (confirmar) {
      this.questService.remover(this.questId).subscribe({
        next: () => this.router.navigate(['/quests']),
        error: (err: any) => console.error('Erro ao deletar quest:', err)
      });
    }
  }
}