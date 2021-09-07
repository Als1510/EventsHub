import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private _registerUrl = "https://eventshubs.herokuapp.com/api/register";
  private _loginUrl = "https://eventshubs.herokuapp.com/api/login";

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  registerUser(user: { email: string; password: string; }) {
    return this.http.post<any>(this._registerUrl, user)
  }
  
  loginUser(user: { email: string; password: string; }) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
