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
    this.onDropDown()
  }

  onDropDown()
  {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle?.addEventListener('click', () => {
      dropdownMenu?.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!dropdownToggle?.contains(target as Node) && !dropdownMenu?.contains(target as Node)) {
        dropdownMenu?.classList.remove('show');
      }
    });
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
