import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { LayoutComponent } from './layout/layout.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: 'produto', component: ProdutoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'cliente', component: ClienteComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
