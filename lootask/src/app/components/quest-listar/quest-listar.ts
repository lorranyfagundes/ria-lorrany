import { Component, inject } from '@angular/core';
import { QuestService } from '../../services/quest';

@Component({
  selector: 'app-quest-listar',
  standalone: true,
  imports: [],
  templateUrl: './quest-listar.html'
})
export class QuestListarComponent {
  questService = inject(QuestService);

  selecionar(quest: any) {
    this.questService.questSelecionada.set(quest);
  }
}