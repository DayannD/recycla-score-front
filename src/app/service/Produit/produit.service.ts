import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Materiaux } from "../../core/models/materiaux/materiaux";
import { Produit } from "../../core/models/produit/produit";
import { EnumTags } from "../../core/models/enum/enum-tags";
import { InfosProduit } from "../../core/models/infos-produit/infos-produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl: string;

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
}
