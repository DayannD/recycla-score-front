import { inject, Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "../../core/models/decoded-token/decoded-token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi: string;
  private cookieService = inject(CookieService)
  constructor(
    private readonly http: HttpClient,
  ) {
    this.urlApi = environment.urlApi;
  }

  public auth(username: string, password: string) {
    console.log("ICI",`${this.urlApi}/connexion`, { username , password }, { withCredentials: true, responseType: "text" });
    return this.http.post(`${this.urlApi}/connexion`, { username , password }, { withCredentials: true, responseType: "text" });
  }

  public register(nomUtilisateur:string, email: string, motDePasse: string) {
    return this.http.post(`${this.urlApi}/inscription`, { nomUtilisateur, email, motDePasse }, { withCredentials: true },);
  }

  public isLogged() {
    const token = this.cookieService.get('token');

    return !!token;
  }

  public forgotPassword(email: string) {
    return this.http.post(`${this.urlApi}/mot-de-passe-oublie`, { email }, { withCredentials: true });
  }

  public getTokens() {
    return this.cookieService.get('token');
  }

  public isAdmin() {
    const token = this.getTokens();
    if (!token) {
      return false;
    }

    const decodedToken = jwtDecode(token) as DecodedToken;
    return decodedToken.role === 'ADMIN';
  }

  public logout() {
    return this.http.post(`${this.urlApi}/deconnexion`, {}, { withCredentials: true });
  }
}
