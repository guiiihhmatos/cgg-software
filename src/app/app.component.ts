import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cgg-software';

  validate = true

  constructor()
  {}

  ngOnInit(): void {

    let login = localStorage.getItem('login')

    if(login != '' && login != undefined)
    {
      this.validate = false
    }
    else
    {
      this.validate = true
    }
  }
}

