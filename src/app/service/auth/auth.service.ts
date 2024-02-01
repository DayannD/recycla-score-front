import { inject, Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

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

  public logout() {
    return this.http.post(`${this.urlApi}/deconnexion`, {}, { withCredentials: true });
  }
}
