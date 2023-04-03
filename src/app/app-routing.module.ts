import { AdminEquipeComponent } from './pages/admin/admin-equipe/admin-equipe.component';
import { AdminServicosDetalhesComponent } from './pages/admin/admin-servicos-detalhes/admin-servicos-detalhes.component';
import { AdminServicoComponent } from './pages/admin/admin-servico/admin-servico.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminCadastrarFuncionarioComponent } from './pages/admin/admin-cadastrar-funcionario/admin-cadastrar-funcionario.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'servicos', component: ServicosComponent
  },
  {
    path: 'contato', component: ContatoComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', children: [
      {
        path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard]
      },
      {
        path: 'servicos', component: AdminServicoComponent, canActivate: [AuthGuard]
      },
      {
        path: 'servicos/:codigo_servico', component: AdminServicosDetalhesComponent, canActivate: [AuthGuard]
      },
      {
        path: 'equipe', component: AdminEquipeComponent, canActivate: [AuthGuard]
      },
      {
        path: 'cadastrar/funcionario', component : AdminCadastrarFuncionarioComponent, canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
