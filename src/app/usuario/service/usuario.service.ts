import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService { 

  constructor(private http: HttpClient) { }

  salvar(usuario: UsuarioModel):Observable<UsuarioModel> {
    return this.http.
    post<UsuarioModel>('http://localhost:8080/usuario', usuario);
  }
    
  listar():Observable<UsuarioModel[]> {
    return this.http.
    get<UsuarioModel[]>('http://localhost:8080/usuario');
  }
}
