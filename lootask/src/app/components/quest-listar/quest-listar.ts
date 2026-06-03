import { Component, inject, output } from '@angular/core';
import { QuestService } from '../../services/quest';

@Component({ 
  selector: 'app-quest-listar', 
  standalone: true, 
  imports: [], 
  templateUrl: './quest-listar.html' 
})
export class QuestListarComponent {
  questService = inject(QuestService);
  
  aoSelecionar = output<any>(); 

  selecionar(quest: any) {
    this.aoSelecionar.emit(quest);
  }
}