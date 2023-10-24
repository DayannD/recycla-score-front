import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MonoMaterial} from "../../models/mono-material/mono-material";

@Injectable({
  providedIn: 'root'
})
export class MonoMaterialService {

  private apiUrl = 'http://localhost:8080/api/monomaterial';  // Changez ceci selon votre configuration

  constructor(private http: HttpClient) { }

  getMonoMaterials(): Observable<MonoMaterial[]> {
    return this.http.get<MonoMaterial[]>(this.apiUrl);
  }
}
