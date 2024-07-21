import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../shared/user';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponseData } from '../shared/auth-response-data';
import { Router } from '@angular/router';
import { RegisterUser } from '../shared/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  AuthenticatedUser$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router,
    @Inject('baseURL') public baseURL: any
  ) { }

  login(email: string, password: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + window.btoa(email + ':' + password)
      }),
      withCredentials: true
    };

    return this.http.post<AuthResponseData>(this.baseURL + 'auth/signin', null, httpOptions).pipe(
      catchError(err => {
        let errorMessage = 'An unknown error occurred!';
        if (err.error.message === 'Bad credentials') {
          errorMessage = 'The email address or password you entered is invalid';
        }
        return throwError(() => new Error(errorMessage));
      }),
      tap(user => {
        const extractedUser: User = {
          email: user.email,
          id: user.id,
          role: {
            name: user.roles.find(role => role.includes('ROLE')) || '',
            permissions: user.roles.filter(permission => !permission.includes('ROLE'))
          }
        };
        this.storageService.saveUser(extractedUser);
        this.AuthenticatedUser$.next(extractedUser);
      })
    );
  }

  register(user: RegisterUser) {
    return this.http.post<RegisterUser>(this.baseURL + 'auth/signup', user).pipe(
      catchError(err => {
        let errorMessage = 'An unknown error occurred!';
        if (err.error.message === 'User already exists') {
          errorMessage = 'This email address is already registered';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  autoLogin() {
    const userData = this.storageService.getSavedUser();
    if (!userData) {
      return;
    }
    this.AuthenticatedUser$.next(userData);
  }

  logout() {
    this.http.request('post', this.baseURL + 'auth/signout', {
      withCredentials: true
    }).subscribe({
      next: () => {
        this.storageService.clean();
        this.AuthenticatedUser$.next(null);
        this.router.navigate(['/signin']);
      }
    });
  }

  // Nouvelle méthode pour rafraîchir le jeton JWT
  refreshToken() {
    return this.http.post<AuthResponseData>(this.baseURL + 'auth/refresh', {}, { withCredentials: true }).pipe(
      tap(response => {
        const extractedUser: User = {
          email: response.email,
          id: response.id,
          role: {
            name: response.roles.find(role => role.includes('ROLE')) || '',
            permissions: response.roles.filter(permission => !permission.includes('ROLE'))
          }
        };
        this.storageService.saveUser(extractedUser);
        this.AuthenticatedUser$.next(extractedUser);
      })
    );
  }
}
