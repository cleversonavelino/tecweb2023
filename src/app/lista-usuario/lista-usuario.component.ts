import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {
  displayedColumns: string[] = ['Login','Nome'];
  dataSource = [{login: 'cleverson', nome:'Cleverson Avelino ', email: 'cleversonavelino@gmail.com'}];

}
