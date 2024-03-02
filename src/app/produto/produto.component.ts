import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Produto } from './model/produto.model';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  nome = new FormControl('',[Validators.required, Validators.minLength(5)])
  preco = new FormControl('',[Validators.required, Validators.min(0.01)])

  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
  }

  salvar() {
    if (this.nome.invalid) {
      console.log('Nome inválido')
      return
    }

    if (this.preco.invalid) {
      console.log('Preço inválido')
      return
    }

    console.log('Nome:', this.nome.value)
    console.log('Preço:', this.preco.value)

    let produto = new Produto()
    produto.nome = this.nome.value?.toString()
    //produto.preco = Number.
    //parseFloat(this.preco.value)
    console.log(produto)

    this.produtoService.salvar(produto).
    subscribe(produto => {
      console.log(produto)
    },
    error => {
      console.log('Erro ao salvar produto', error)
    });
  }

}
