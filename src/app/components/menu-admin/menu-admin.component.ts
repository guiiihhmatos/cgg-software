import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  user !: string | null

  constructor
  (
    private auth : AuthService
  ) { }

  ngOnInit(): void {

    this.getUser()
  }

  getUser()
  {
    this.user = this.auth.userValue
  }

  logout()
  {
    this.auth.logout()
  }
}
