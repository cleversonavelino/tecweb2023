import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  login = new FormControl('', 
    [Validators.required, Validators.minLength(5)]);
  nome = new FormControl('');
  email = new FormControl('');

  salvar() {
    console.log(this.login.value);
    console.log(this.nome.value);
    console.log(this.email.value);
  }

}
