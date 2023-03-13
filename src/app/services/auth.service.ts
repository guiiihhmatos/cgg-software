import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<Usuario>;
  public user: Observable<Usuario>;

  private role = ''

  constructor
    (
      private http: HttpClient,
      private router: Router,
    ) {
    this.userSubject = new BehaviorSubject<any>(
      localStorage.getItem('login')
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return localStorage.getItem('login')
  }

  public get roleValue() {
    return this.role
  }

  login(users: any) {


    return this.http
      .get<any>('assets/api/usuarios.json')
      .pipe(
        map(({ servidor }) => {

          localStorage.setItem('login', users.login)
          localStorage.setItem('nome_usuario', users.nome_usuario)
          localStorage.setItem('senha', users.senha)

          this.userSubject.next(users);
          return users;
        })
      );
  }

  logout() {

    localStorage.removeItem('login')
    localStorage.removeItem('senha')
    localStorage.removeItem('nome_usuario')

    location.reload()
  }



}
