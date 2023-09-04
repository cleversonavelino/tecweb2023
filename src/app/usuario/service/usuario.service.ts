import { Injectable } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService { 

  usuarios: UsuarioModel[] = [];

  constructor() { }

  salvar(usuario: UsuarioModel) {
    this.usuarios.push(usuario);

    console.log(this.usuarios);
  }
}
