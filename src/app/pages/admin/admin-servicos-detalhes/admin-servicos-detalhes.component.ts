import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-servicos-detalhes',
  templateUrl: './admin-servicos-detalhes.component.html',
  styleUrls: ['./admin-servicos-detalhes.component.css']
})
export class AdminServicosDetalhesComponent implements OnInit {

  servico: any

  constructor
  ()
  {
    this.servico = history.state.data

    console.log(this.servico)
  }

  ngOnInit(): void {
  }

  downloadPdf(pdfUrl : string) {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', pdfUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        const blob = new Blob([this.response], {type: 'application/pdf'});
        const fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl);
      }
    };
    xhr.send();
  }




}
