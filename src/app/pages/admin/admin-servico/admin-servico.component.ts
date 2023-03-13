import { ServicosService } from './../../../services/servicos/servicos.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-servico',
  templateUrl: './admin-servico.component.html',
  styleUrls: ['./admin-servico.component.css']
})
export class AdminServicoComponent implements OnInit {

  displayedColumns = ['codigo', 'nome', 'cliente', 'data_inicio' ,'status']

  fileName = 'ExcelSheet.xlsx';

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor
  (
    private router : Router,
    private serviceServico : ServicosService
  )
  {}

  ngOnInit(): void {

    this.getServico()
  }

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  redirectDetails(servico : any)
  {
    this.router.navigate([`/admin/servicos/${servico.codigo_servico}}`], {state:{data: servico}})
  }

  getServico()
  {
    this.serviceServico.getServicos().subscribe(value => {

      this.dataSource.data = value

    })
  }

  exportexcel(): void
  {
    /* pass here the table id */
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.dataSource.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Relatorio');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
