import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
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
