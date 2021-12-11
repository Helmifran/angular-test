import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListagemComponent } from './pages/listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormularioComponent, ListagemComponent]
})
export class AppModule { }
