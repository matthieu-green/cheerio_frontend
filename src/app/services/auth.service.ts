import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { baseUrl } from '../baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

interface AuthResponse {
  status: string,
  success: string,
  token: string,
  admin: string,
  name: string,
  address: string
};

interface JWTResponse {
  status: string,
  success: string,
  user: any
};

@Injectable()
export class AuthService {

 tokenKey: string = 'JWT';
 isAuthenticated: Boolean = false;
 username: Subject<string> = new Subject<string>();
 authToken: string = undefined;

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) {
  }

  checkJWTtoken() {
    this.http.get<JWTResponse>(baseUrl + 'users/checkJWTtoken')
    .subscribe(res => {
      console.log("JWT Token Valid: ", res);
      this.sendUsername(res.user.username);
    },
    err => {
      console.log("JWT Token invalid: ", err);
      this.destroyUserCredentials();
    })
  }

  sendUsername(name: string) {
    this.username.next(name);
  }

  clearUsername() {
    this.username.next(undefined);
  }

  loadUserCredentials() {
    var credentials = JSON.parse(localStorage.getItem(this.tokenKey));
    console.log("loadUserCredentials ", credentials);
    if (credentials && credentials.username != undefined) {
      this.useCredentials(credentials);
      if (this.authToken)
        this.checkJWTtoken();
    }
  }

  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUsername(credentials.username);

  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.clearUsername();
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('admin');
    localStorage.removeItem('name');
    localStorage.removeItem('address');
  }

  signUp(user: any): Observable<any> {
    return this.http.post(baseUrl + 'users/signup',
      {"name": user.name, "address": user.address, "username": user.username, "password": user.password})
      .map((res) => {
        return {'success': true, 'username': user.username, 'address': user.address };
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  logIn(user: any): Observable<any> {
    return this.http.post<AuthResponse>(baseUrl + 'users/login',
      {"username": user.username, "password": user.password})
      .map((res) => {
          localStorage.setItem('name', res.name);
          localStorage.setItem('token', res.token);
          localStorage.setItem('admin', res.admin)
          localStorage.setItem('address', res.address);
          this.useCredentials({username: user.username, token: res.token});
          this.authToken = res.token;
          return {'success': true, 'username': user.username, 'admin': res.admin, 'name': res.name };
      })
        .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }


  logOut() {
    this.destroyUserCredentials();
  }

  isLoggedIn(): Boolean {
    return this.isAuthenticated;
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
