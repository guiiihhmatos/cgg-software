import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-servicos-detalhes',
  templateUrl: './admin-servicos-detalhes.component.html',
  styleUrls: ['./admin-servicos-detalhes.component.css']
})
export class AdminServicosDetalhesComponent implements OnInit {

  servico: any

  constructor
  (
    private router : Router
  )
  {
    this.servico = history.state.data

    console.log(this.servico)
  }

  ngOnInit(): void {
  }

}
