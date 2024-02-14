import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from "@angular/common";
import { TableComponent } from "../../../../shared/components/table/table.component";
import { MonoMaterialService } from "../../../../service/mono-material/mono-material.service";

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    TableComponent
  ],
  templateUrl: './list-mono-material.component.html',
  styleUrl: './list-mono-material.component.css'
})
export class ListMonoMaterialComponent {
  public monoMaterial$;

  protected columnsMonoMaterial: { key: string, title: string }[] = [
    { key: 'name', title: 'Nom' },
    { key: 'material', title: 'Materiau' },
    { key: 'recyclability', title: 'Recyclabilité' }
  ];


  constructor(
    private readonly monoMaterial: MonoMaterialService
  ) {
    this.monoMaterial$ = this.monoMaterial.getAllMonoMaterials();
  }
}
