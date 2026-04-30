import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';

interface Item {
  id?: number;
  nome: string;      // String
  valor: number;     // Number
  disponivel: boolean;    // Boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, DialogModule, InputTextModule, InputNumberModule, CheckboxModule, TagModule],
  templateUrl: './app.html', 
  styleUrl: './app.css'      
})
export class AppComponent {
  itens: Item[] = [
    { id: 1, nome: 'Exemplo 1', valor: 100, disponivel: true }
  ];
  
  exibirModal: boolean = false;
  itemSelecionado: Item = { nome: '', valor: 0, disponivel: false };

  abrirNovo() {
    this.itemSelecionado = { nome: '', valor: 0, disponivel: false };
    this.exibirModal = true;
  }

  salvar() {
    if (this.itemSelecionado.id) {
      const index = this.itens.findIndex(i => i.id === this.itemSelecionado.id);
      this.itens[index] = this.itemSelecionado;
    } else {
      this.itemSelecionado.id = Math.floor(Math.random() * 1000);
      this.itens.push({...this.itemSelecionado});
    }
    this.exibirModal = false;
  }

  excluir(id: number) {
    this.itens = this.itens.filter(i => i.id !== id);
  }
}