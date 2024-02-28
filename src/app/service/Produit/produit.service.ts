import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Produit } from "../../core/models/produit/produit";
import { InfosProduit } from "../../core/models/infos-produit/infos-produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlApi;
  }
  public getProduits(tag: string) {
    return this.http.get<Produit[]>(this.apiUrl + `/api/produit/${tag}`, { withCredentials: true });
  }

  public getOneProduit(id: number) {
    return this.http.get<InfosProduit>(this.apiUrl + `/api/produit/details/${id}`, { withCredentials: true });
  }

  public getAllProduits() {
    return this.http.get<Produit[]>(this.apiUrl + `/api/produit/all`, { withCredentials: true });
  }

  addProduit(formValue: Produit) {
    return this.http.post(this.apiUrl + '/api/admin/produit', formValue, { withCredentials: true });
  }

  public deleteById(id: number) {
    return this.http.delete(this.apiUrl + `/api/admin/produit/${id}`, { withCredentials: true });
  }
}
