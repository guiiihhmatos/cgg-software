import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { AdminServicoComponent } from './pages/admin/admin-servico/admin-servico.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminServicosDetalhesComponent } from './pages/admin/admin-servicos-detalhes/admin-servicos-detalhes.component';
import { NgCircleProgressModule, CircleProgressOptions  } from 'ng-circle-progress';
import { AdminEquipeComponent } from './pages/admin/admin-equipe/admin-equipe.component';
import { AdminCadastrarFuncionarioComponent } from './pages/admin/admin-cadastrar-funcionario/admin-cadastrar-funcionario.component';
import { MenuMobileComponent } from './components/menu-admin/menu-mobile/menu-mobile.component';
import { MenuLateralComponent } from './components/menu-admin/menu-lateral/menu-lateral.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ServicosComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    MenuAdminComponent,
    MenuLateralComponent,
    AdminServicoComponent,
    AdminServicosDetalhesComponent,
    AdminEquipeComponent,
    AdminCadastrarFuncionarioComponent,
    MenuMobileComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      // opções de configuração aqui
    })
  ],
  providers: [CircleProgressOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
