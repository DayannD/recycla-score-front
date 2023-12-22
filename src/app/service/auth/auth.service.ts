import { inject, Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

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
    return this.http.post(`${this.urlApi}/connexion`, { username , password }, { withCredentials: true, responseType: "text" },);
  }

  public register(nomUtilisateur:string, email: string, motDePasse: string) {
    return this.http.post(`${this.urlApi}/inscription`, { nomUtilisateur, email, motDePasse }, { withCredentials: true },);
  }

  public isLogged() {
    const token = this.cookieService.get('token');

    return !!token;
  }

  public logout() {
    this.http.post(`${this.urlApi}/deconnexion`, {}, { withCredentials: true },);
  }
}
