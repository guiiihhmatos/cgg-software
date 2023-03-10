import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private api = '/assets/api/servicos.json'
  constructor
  (
    private http : HttpClient
  ) { }

  getServicos()
  {
    return this.http.get<any>('/assets/api/servicos.json')
  }
}
