import { Routes } from '@angular/router';
import { QuestListarComponent } from './components/quest-listar/quest-listar';
import { QuestIncluirComponent } from './components/quest-incluir/quest-incluir';
import { QuestDetalharComponent } from './components/quest-detalhar/quest-detalhar';
import { QuestAlterarComponent } from './components/quest-alterar/quest-alterar';
import { LoginComponent } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Agora vai pro login primeiro
  { path: 'login', component: LoginComponent },
  
  // Rotas protegidas (com o Guard):
  { path: 'quests', component: QuestListarComponent, canActivate: [authGuard] },
  { path: 'quests/novo', component: QuestIncluirComponent, canActivate: [authGuard] },
  { path: 'quests/:id/detalhe', component: QuestDetalharComponent, canActivate: [authGuard] },
  { path: 'quests/:id/alterar', component: QuestAlterarComponent, canActivate: [authGuard] }
];