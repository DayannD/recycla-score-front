// src/app/components/acceuil/acceuil.component.ts
import { Component, OnInit } from '@angular/core';
import {MonoMaterial} from "../../../../core/models/mono-material/mono-material";
import {MonoMaterialService} from "../../../../service/mono-material/mono-material.service";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  monoMaterials: MonoMaterial[] = [];
  selectedMaterialRecyclability: string | null = null;

  constructor(private monoMaterialService: MonoMaterialService) { }

  ngOnInit(): void {
    this.monoMaterialService.getMonoMaterials().subscribe(materials => {
      this.monoMaterials = materials;
    });
  }

  onMaterialClick(material: MonoMaterial): void {
    this.selectedMaterialRecyclability = material.recyclability;
  }
}
