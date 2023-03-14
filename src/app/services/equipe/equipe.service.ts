import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor
  (
    private http : HttpClient
  ) { }

  getAllFuncionarios()
  {
    return this.http.get<any>('assets/api/funcionarios.json')
  }
}
