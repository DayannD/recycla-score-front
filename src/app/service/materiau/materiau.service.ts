import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Materiaux } from "../../core/models/materiaux/materiaux";

@Injectable({
  providedIn: 'root'
})
export class MateriauService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlApi;
  }

  public getAllMateriaux() {
    return this.http.get<Materiaux[]>(this.apiUrl + `/api/materiaux`, { withCredentials: true });

  }

  addMateriau(formValue: Materiaux) {
    return this.http.post<void>(this.apiUrl + `/api/admin/materiau`, formValue, { withCredentials: true });
  }

  updateMateriau(materiau: Materiaux) {
    return this.http.put<void>(this.apiUrl + `/api/admin/materiau`, materiau, { withCredentials: true });
  }

  deleteBYId(id: number) {
    return this.http.delete<void>(this.apiUrl + `/api/admin/materiau/${id}`, { withCredentials: true });
  }

  getOneMateriau(id:  number) {
    return this.http.get<Materiaux>(this.apiUrl + `/api/materiaux/${id}`, { withCredentials: true });
  }
}
