import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  valLogin : any = 'true'

  constructor
  (
    private router : Router,
    public rotaAtual: ActivatedRoute

  )
  { }

  ngOnInit(): void
  {
  }


  detailsLogin()
  {
    this.router.navigate(['login']);
  }
}
