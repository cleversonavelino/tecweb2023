import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario/model/usuario.model';
import { UsuarioService } from '../usuario/service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['Login','Nome'];
  dataSource: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) {}
  
  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.usuarioService.listar().subscribe(usuarios => {
      this.dataSource = usuarios;
    });
  }


  

}
