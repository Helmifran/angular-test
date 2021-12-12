import { Rotas } from '@enums';
import { AppComponent } from './app.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'formulario', loadChildren: () => import('./pages/formulario/formulario.module').then(m => m.FormularioModule) }, 
  { path: 'listagem', loadChildren: () => import('./pages/listagem/listagem.module').then(m => m.ListagemModule) },
  { path: '**', redirectTo: Rotas.ROTA_HOME.listagem, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AppRoutingModule { }
