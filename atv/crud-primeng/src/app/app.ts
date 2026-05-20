import { Component, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    ButtonModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    InputTextModule,
    InputNumberModule,
    TagModule
  ]
})
export class AppComponent {
  // LISTAR: Array com dados iniciais
  itens: any[] = [
    { id: 1, nome: 'Brinco', valor: 63.00, disponivel: true },
    { id: 2, nome: 'Colar Prata', valor: 120.00, disponivel: false }
  ];
  exibirModal = false;

  // SIGNAL FORMS: Estado do formulário
  idEdicao = signal<number | null>(null);
  nome = signal<string>('');
  valor = signal<number | null>(null);
  disponivel = signal<boolean>(true);

  // VALIDAÇÕES REATIVAS (Sinais Computados)
  nomeInvalido = computed(() => this.nome().trim().length === 0);
  valorInvalido = computed(() => this.valor() === null || this.valor()! <= 0);
  formValido = computed(() => !this.nomeInvalido() && !this.valorInvalido());

  // INCLUIR (Prepara o modal vazio)
  abrirNovo() {
    this.idEdicao.set(null);
    this.nome.set('');
    this.valor.set(null);
    this.disponivel.set(true);
    this.exibirModal = true;
  }

  // DETALHAR / ALTERAR (Preenche o modal com o item escolhido)
  editar(item: any) {
    this.idEdicao.set(item.id);
    this.nome.set(item.nome);
    this.valor.set(item.valor);
    this.disponivel.set(item.disponivel);
    this.exibirModal = true;
  }

  // REMOVER
  excluir(id: number) {
    this.itens = this.itens.filter(i => i.id !== id);
  }

  // SALVAR (Executa a Inclusão ou a Alteração)
  salvar() {
    if (!this.formValido()) return; 

    if (this.idEdicao() !== null) {
      // Lógica de Alterar
      const index = this.itens.findIndex(i => i.id === this.idEdicao());
      this.itens[index] = { id: this.idEdicao(), nome: this.nome(), valor: this.valor(), disponivel: this.disponivel() };
    } else {
      // Lógica de Incluir
      const novoId = Math.floor(Math.random() * 1000); 
      this.itens.push({ id: novoId, nome: this.nome(), valor: this.valor(), disponivel: this.disponivel() });
    }
    
    this.exibirModal = false;
  }
}