import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Materiaux } from "../../core/models/materiaux/materiaux";
import { Produit } from "../../core/models/produit/produit";
import { EnumTags } from "../../core/models/enum/enum-tags";

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
}
