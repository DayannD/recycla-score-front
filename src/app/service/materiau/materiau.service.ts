import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Materiaux } from "../../core/models/materiaux/materiaux";

@Injectable({
  providedIn: 'root'
})
export class MateriauService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlApi;
  }

  public getAllMateriaux() {
    return this.http.get<Materiaux[]>(this.apiUrl + `/api/materiaux`, { withCredentials: true });

  }
}
