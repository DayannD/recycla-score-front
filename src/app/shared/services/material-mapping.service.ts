import { Injectable } from '@angular/core';
import {EnumMonoMaterial} from "../../core/models/enum/enum-mono-material";

@Injectable({
  providedIn: 'root'
})
export class MaterialMappingService {
  private materialMap = new Map<string, string>([
    ['Acier Inoxydable', "ACIER_INOX"],
    ['Polystyrène Expansé', "POLY_EXPAN"]
  ]);

  getEnumValue(materialName: string): string | undefined {
    return this.materialMap.get(materialName);
  }
}
