import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'formulario', loadChildren: () => import('./pages/formulario/formulario.module').then(m => m.FormularioModule) }, { path: 'listagem', loadChildren: () => import('./pages/listagem/listagem.module').then(m => m.ListagemModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
