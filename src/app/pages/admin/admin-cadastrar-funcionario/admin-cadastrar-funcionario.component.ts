import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-cadastrar-funcionario',
  templateUrl: './admin-cadastrar-funcionario.component.html',
  styleUrls: ['./admin-cadastrar-funcionario.component.css']
})
export class AdminCadastrarFuncionarioComponent implements OnInit {


  constructor
  (
    private location : Location
  )
  {}
  ngOnInit(): void {
  }

  onBack()
  {
    this.location.back()
  }

}
