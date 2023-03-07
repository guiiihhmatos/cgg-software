import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  error = '';
  val = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService

  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });


  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe({
        next: () => {

          this.router.navigate(['admin/home']), open('admin/home', "_self")
        },
        error: (error) => {

            this.error = 'Usuário ou senha inválidos'
            this.val = true

        },
      });
  }



}
