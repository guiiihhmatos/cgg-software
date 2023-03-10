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
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { AdminServicoComponent } from './pages/admin/admin-servico/admin-servico.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
