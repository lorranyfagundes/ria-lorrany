import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quest } from '../models/quest.models';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private http = inject(HttpClient);
  
  private apiUrl = 'https://sturdy-succotash-746qv4wxqp43wxrp-3000.app.github.dev/quests'; 

  listar(): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Quest> {
    return this.http.get<Quest>(`${this.apiUrl}/${id}`);
  }

  inserir(quest: Omit<Quest, 'id'>): Observable<Quest> {
    return this.http.post<Quest>(this.apiUrl, quest);
  }

  atualizar(quest: Quest): Observable<Quest> {
    return this.http.put<Quest>(`${this.apiUrl}/${quest.id}`, quest);
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}