import { Injectable, signal } from '@angular/core';
import { Quest } from '../models/quest.models';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private _listaDeQuests = signal<Quest[]>([
    { id: 1, texto: 'Fazer post pro SAM sobre @property do python', xp: 50, feita: false },
    { id: 2, texto: 'Pesquisar sobre properties', xp: 30, feita: true }
  ]);

  get listaDeQuests() {
    return this._listaDeQuests.asReadonly();
  }

  adicionarQuest(novaQuest: Quest) {
    this._listaDeQuests.update(quests => [...quests, { ...novaQuest, id: Date.now() }]);
  }

  atualizarQuest(questAtualizada: Quest) {
    this._listaDeQuests.update(quests => 
      quests.map(q => q.id === questAtualizada.id ? questAtualizada : q)
    );
  }

  removerQuest(id: number) {
    this._listaDeQuests.update(quests => quests.filter(q => q.id !== id));
  }

  buscarPorId(id: number): Quest | undefined {
    return this._listaDeQuests().find(q => q.id === id);
  }

}