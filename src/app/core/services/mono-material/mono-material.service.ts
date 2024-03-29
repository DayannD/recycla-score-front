import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MonoMaterial} from "../../models/mono-material/mono-material";

@Injectable({
  providedIn: 'root'
})
export class MonoMaterialService {

  private apiUrl = 'http://localhost:8080/api/monomaterial';
  constructor(private http: HttpClient) { }

  getMonoMaterials(): Observable<MonoMaterial[]> {
    return this.http.get<MonoMaterial[]>(this.apiUrl);
  }

  addMonoMaterial(monoMaterial: MonoMaterial): Observable<MonoMaterial> {
    console.log("je suis dans le service",monoMaterial)
    return this.http.post<MonoMaterial>(this.apiUrl, monoMaterial);
  }
}
