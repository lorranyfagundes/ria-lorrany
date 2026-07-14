import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestService } from '../../services/quest';
import { Quest } from '../../models/quest.models';

@Component({
  selector: 'app-quest-listar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quest-listar.html'
})
export class QuestListarComponent implements OnInit { 
  questService = inject(QuestService);
  router = inject(Router);

  quests = signal<Quest[]>([]);

  ngOnInit() {
    this.questService.listar().subscribe({
      next: (dados) => this.quests.set(dados),
      error: (err) => console.error('Erro ao carregar a lista:', err)
    });
  }

  irParaDetalhe(id: number) {
    if (id) this.router.navigate(['/quests', id, 'detalhe']);
  }

  irParaAlterar(id: number, event: Event) {
    event.stopPropagation();
    if (id) this.router.navigate(['/quests', id, 'alterar']);
  }
  irParaIncluir() {
  this.router.navigate(['/quests/novo']); 
}
}