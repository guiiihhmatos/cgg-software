import { EquipeService } from './../../../services/equipe/equipe.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-equipe',
  templateUrl: './admin-equipe.component.html',
  styleUrls: ['./admin-equipe.component.css']
})
export class AdminEquipeComponent implements OnInit {

  displayedColumns = ['nome', 'cargo', 'departamento' , 'data_emissao']

  fileName = 'ExcelSheet.xlsx';

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor
  (
    private serviceEquipe : EquipeService
  )
  {}

  ngOnInit(): void {
    this.getAllFuncionarios()
  }

  getAllFuncionarios()
  {
    this.serviceEquipe.getAllFuncionarios().subscribe(value => {

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
