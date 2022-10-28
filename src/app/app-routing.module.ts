import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { EditarComponent } from './components/pensamentos/editar/editar.component';
import { ExcluirComponent } from './components/pensamentos/excluir/excluir.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes =[
  {
    path: '',
    redirectTo:'listarPensamento',
    pathMatch:'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component: ListarPensamentosComponent
  },
  {
    path:'pensamentos/excluirPensamento/:id',
    component: ExcluirComponent
  },
  {
    path:'pensamentos/editarPensamento/:id',
    component: EditarComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
