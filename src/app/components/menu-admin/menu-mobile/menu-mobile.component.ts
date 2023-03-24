import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {

  @Input() validador ?: boolean

  constructor()
  {

    if(this.validador)
    {
      
    }

  }

  ngOnInit(): void {
  }


}
