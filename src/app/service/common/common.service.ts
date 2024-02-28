import { inject, Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ContactMail } from "../../core/models/contact-mail/contact-mail";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly urlApi: string;
  constructor(
    private readonly http: HttpClient,
  ) {
    this.urlApi = environment.urlApi;
  }

  public getTags() {
    return this.http.get<string[]>(`${this.urlApi}/api/admin/tags`, { withCredentials: true });
  }

  sendMail(mail: ContactMail) {
    console.log(mail);
    return this.http.post(`${this.urlApi}/api/mail/send`, mail as ContactMail, { withCredentials: true });
  }
}
