import { Component } from '@angular/core';
import { QuestListarComponent } from './components/quest-listar/quest-listar';
import { QuestIncluirComponent } from './components/quest-incluir/quest-incluir';
import { QuestDetalharComponent } from './components/quest-detalhar/quest-detalhar';
import { QuestAlterarComponent } from './components/quest-alterar/quest-alterar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestListarComponent, QuestIncluirComponent, QuestDetalharComponent, QuestAlterarComponent],
  template: `
    <div style="padding: 20px; max-width: 500px; margin: 0 auto;">
      <h1 style="text-align: center; color: #d81b60;">⚔️ Lootask</h1>
      <app-quest-incluir></app-quest-incluir>
      <app-quest-listar></app-quest-listar>
      <br>
      <app-quest-detalhar></app-quest-detalhar>
      <app-quest-alterar></app-quest-alterar>
    </div>
  `
})
export class AppComponent {}