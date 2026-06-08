import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Importamos o Router
import { QuestService } from '../../services/quest';

@Component({
  selector: 'app-quest-listar',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './quest-listar.html'
})
export class QuestListarComponent {
  questService = inject(QuestService);
  router = inject(Router);

  irParaDetalhe(id: number) {
    this.router.navigate(['/quests', id, 'detalhe']);
  }

  irParaAlterar(id: number, event: Event) {
    event.stopPropagation(); 
    this.router.navigate(['/quests', id, 'alterar']);
  }
}