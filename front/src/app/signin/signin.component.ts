import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  errorMessage!: string;
  AuthUserSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next: user => {
        if (user) {
          this.router.navigate(['']);
        }
      }
    });
  }

  onSubmitSignin(formLogin: NgForm) {
    if (!formLogin.valid) {
      return;
    }

    const email = formLogin.value.email;
    const password = formLogin.value.password;

    this.authService.login(email, password).subscribe({
      next: userData => {
        this.router.navigate(['/']);
      },
      error: err => {
        this.errorMessage = err.message; // Ensure error messages are properly displayed
      }
    });
  }

  ngOnDestroy() {
    this.AuthUserSub.unsubscribe();
  }
}
