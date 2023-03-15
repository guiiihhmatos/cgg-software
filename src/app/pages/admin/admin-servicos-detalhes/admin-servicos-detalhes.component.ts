import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-servicos-detalhes',
  templateUrl: './admin-servicos-detalhes.component.html',
  styleUrls: ['./admin-servicos-detalhes.component.css']
})
export class AdminServicosDetalhesComponent implements OnInit {

  servico: any
  @Input() percent!: number;

  colorOuter : any
  colorInner : any

  constructor
  (
    private elementRef: ElementRef
  )
  {
    this.servico = history.state.data

    console.log(this.servico)

    this.percent = this.servico.percentual

    console.log(this.percent)
  }

  ngOnInit(): void {

    this.verifyColor()
  }

  verifyColor()
  {
    if(this.percent < 50)
    {
      this.colorInner = 'rgb(255, 79, 79)'
      this.colorOuter = 'red'
    }
    else if(this.percent > 50 && this.percent < 100)
    {
      this.colorInner = 'rgb(255, 146, 122)'
      this.colorOuter = 'rgb(255, 126, 97)'
    }
    else
    {
      this.colorInner = '#C7E596'
      this.colorOuter = '#78C000'
    }
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
