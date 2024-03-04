import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../models/JwtPayload';
import moment from 'moment';
import { AppRoutesConfig } from '../configs/routes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public routesConfig = AppRoutesConfig;
  //jwt 10 sec eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAifQ.YnIHeTs6BV7pRX6CpDmxkrvxS1CRdSYE-n7eTjD8IK0
  //jwt 1000 sec eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg
  public jwt_Token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAifQ.YnIHeTs6BV7pRX6CpDmxkrvxS1CRdSYE-n7eTjD8IK0';
  public decodedHeader = jwtDecode(this.jwt_Token);

  public validateToken(token: string): JwtPayload | null {
    const decodedToken = jwtDecode(token);
    if (token == null) return null;
    if (decodedToken) return decodedToken as JwtPayload;
    else return null;
  }
  public getTokenExpiration(): string {
    const expiresat = localStorage.getItem('Login_expire_time');
    if (expiresat) {
      return expiresat;
    } else return '0';
  }
  public hasTokenExpired(): boolean {
    const currentMoment = moment();
    const currentmoment = currentMoment.toString();
    const expiretime = this.getTokenExpiration();
    return !moment(expiretime).isBefore(currentmoment);
  }
  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? this.hasTokenExpired() : !this.hasTokenExpired();
  }
  public setSession(name: string, value: string): void {
    localStorage.setItem(name, value);
  }
  public removeSession(name: string): void {
    localStorage.removeItem(name);
  }
  public login(userName: string, userPass: string): boolean {
    console.log('User:' + userName + ' Pass:' + userPass);
    const result = Math.random() >= 0.5;
    if (result) {
      const validation = this.validateToken(this.jwt_Token);
      if (validation != null) {
        this.setSession(
          'Login_expire_time',
          moment()
            .add(this.validateToken(this.jwt_Token)?.expires_at, 'seconds')
            .toString()
        );
        this.setSession('token', this.jwt_Token);
        return true;
      } else return false;
    } else return false;
  }
}
