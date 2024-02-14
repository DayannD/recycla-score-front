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

  getAllMonoMaterials(): Observable<MonoMaterial[]> {
    return this.http.get<MonoMaterial[]>(this.apiUrl + '/api/monomaterial', { withCredentials: true });
  }

  addMonoMaterial(monoMaterial: MonoMaterial): Observable<void> {
    return this.http.post<void>(this.apiUrl + '/api/admin/mono-material', monoMaterial, { withCredentials: true });
  }
}
