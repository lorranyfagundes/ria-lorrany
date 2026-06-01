import { Component, input, output } from '@angular/core';
import { Quest } from '../../models/quest.models';

@Component({
  selector: 'app-quest-listar',
  standalone: true,
  imports: [],
  templateUrl: './quest-listar.html',
  styleUrl: './quest-listar.scss'
})
export class QuestListarComponent {
  quests = input<Quest[]>([]);
  
  aoSelecionar = output<Quest>();
}