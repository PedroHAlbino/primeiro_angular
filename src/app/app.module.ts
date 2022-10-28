import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PensamentoComponent } from './components/pensamentos/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirComponent } from './components/pensamentos/excluir/excluir.component';
import { EditarComponent } from './components/pensamentos/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentosComponent,
    PensamentoComponent,
    ExcluirComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
