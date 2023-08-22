import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  login = new FormControl('', 
    [Validators.required, Validators.minLength(5)]);
  nome = new FormControl('');
  email = new FormControl('', 
    [Validators.required, Validators.email]);

  salvar() {
    console.log(this.login.value);
    console.log(this.nome.value);
    console.log(this.email.value);
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
