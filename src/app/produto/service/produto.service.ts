import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  salvar(produto: any) {
    return this.httpClient.post('http://localhost:3000/produtos', produto); 
  }
}
