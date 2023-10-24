import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { reduce } from 'rxjs';
import { UsuarioModel } from './model/usuario.model';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(private usuarioService: UsuarioService) {}

  login = new FormControl('', 
    [Validators.required, Validators.minLength(5)]);
  nome = new FormControl('');
  email = new FormControl('', 
    [Validators.required, Validators.email]);

  async salvar() {
    let usuario = new UsuarioModel();
    usuario.email = this.email.value?.toString();
    usuario.login = this.login.value?.toString();
    usuario.nome = this.nome.value?.toString();

    this.usuarioService.salvar(usuario).subscribe(usuario => {
      console.log(usuario);
    });
  }

  users = [
    { login: 'admin', name: 'Administrador', age: 2},
    { login: 'user', name: 'Usuário', age:19},
    { login: 'guest', name: 'Convidado', age: 22}
  ]

  printUserLogin() {
    this.users.forEach(user => console.log(user.login))
  }

  createNewNameArray() {
    return this.users.map(user => user.name);
  }

  sumAge() {
    return this.users.reduce((acc, user) => acc + user.age, 0);

  }
}
