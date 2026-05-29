import { Component } from '@angular/core';
import { QuestListarComponent } from './components/quest-listar/quest-listar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestListarComponent],
  template: '<app-quest-listar></app-quest-listar>' 
})
export class AppComponent {}