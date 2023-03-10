import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-servico',
  templateUrl: './admin-servico.component.html',
  styleUrls: ['./admin-servico.component.css']
})
export class AdminServicoComponent implements OnInit {

  displayedColumns = ['codigo', 'nome', 'cliente', 'data_inicio' ,'status']

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor
  (
    private router : Router
  )
  {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  redirectDetails(servico : any)
  {
    this.router.navigate([`admin/servicos/detalhes`], {state:{data: servico}})
  }


}
