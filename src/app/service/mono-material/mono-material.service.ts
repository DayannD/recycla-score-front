import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {MonoMaterial} from "../../core/models/mono-material/mono-material";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MonoMaterialService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlApi;
  }

  getMonoMaterials(): Observable<MonoMaterial[]> {
    return this.http.get<MonoMaterial[]>(this.apiUrl + '/api/monomaterial', { withCredentials: true });
  }
}
