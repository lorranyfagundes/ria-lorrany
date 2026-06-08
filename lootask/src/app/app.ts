import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div style="padding: 20px; max-width: 500px; margin: 0 auto;">
      <h1 style="text-align: center; color: #d81b60; cursor: pointer;" routerLink="/quests">⚔️ Lootask</h1>
      
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}