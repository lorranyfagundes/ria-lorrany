import { Component, signal } from '@angular/core';
import { QuestListarComponent } from './components/quest-listar/quest-listar';
import { QuestIncluirComponent } from './components/quest-incluir/quest-incluir';
import { QuestDetalharComponent } from './components/quest-detalhar/quest-detalhar';
import { QuestAlterarComponent } from './components/quest-alterar/quest-alterar';
import { Quest } from './models/quest.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    QuestListarComponent, 
    QuestIncluirComponent, 
    QuestDetalharComponent, 
    QuestAlterarComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  listaDeQuests = signal<Quest[]>([
    { id: 1, texto: 'Fazer post pro SAM sobre @property do python', xp: 50, feita: false },
    { id: 2, texto: 'Pesquisar sobre properties', xp: 30, feita: true }
  ]);

  questSelecionada: Quest | null = null;

  adicionarQuest(novaQuest: Quest) {
    this.listaDeQuests.update(quests => [...quests, { ...novaQuest, id: Date.now() }]);
  }
}