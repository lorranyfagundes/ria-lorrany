import { Component, signal } from '@angular/core';
import { Quest } from '../../models/quest.models';
import { QuestIncluirComponent } from '../quest-incluir/quest-incluir';
import { QuestDetalharComponent } from '../quest-detalhar/quest-detalhar';
import { QuestAlterarComponent } from '../quest-alterar/quest-alterar';

@Component({
  selector: 'app-quest-listar',
  standalone: true,
  imports: [QuestIncluirComponent, QuestDetalharComponent, QuestAlterarComponent],
  templateUrl: './quest-listar.html',
  styleUrl: './quest-listar.scss'
})
export class QuestListarComponent { //signal
  listaDeQuests = signal<Quest[]>([
    { id: 1, texto: 'Fazer post pro SAM sobre @property do python', xp: 50, feita: false },
    { id: 2, texto: 'Pesquisar sobre properties', xp: 30, feita: true }
  ]);

  // adicionar uma quest que vier do componente filho
  adicionarQuest(novaQuest: Quest) {
    this.listaDeQuests.update(quests => [...quests, { ...novaQuest, id: Date.now() }]);
  }
  questSelecionada: Quest | null = null;
}