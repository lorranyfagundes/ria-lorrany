import { Routes } from '@angular/router';
import { QuestListarComponent } from './components/quest-listar/quest-listar';
import { QuestIncluirComponent } from './components/quest-incluir/quest-incluir';
import { QuestDetalharComponent } from './components/quest-detalhar/quest-detalhar';
import { QuestAlterarComponent } from './components/quest-alterar/quest-alterar';

export const routes: Routes = [
  { path: '', redirectTo: 'quests', pathMatch: 'full' },
  
  { path: 'quests', component: QuestListarComponent },
  { path: 'quests/novo', component: QuestIncluirComponent },
  
  { path: 'quests/:id/detalhe', component: QuestDetalharComponent },
  { path: 'quests/:id/alterar', component: QuestAlterarComponent }
];