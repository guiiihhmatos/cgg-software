import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  user !: string | null

  @Output() val = false

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
