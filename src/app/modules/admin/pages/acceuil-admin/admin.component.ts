import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../layout/navbar/navbar.component";
import { TableComponent } from "../../../../shared/components/table/table.component";
import { Produit } from 'src/app/core/models/produit/produit';
import { Observable } from "rxjs";
import { ProduitService } from "../../../../service/Produit/produit.service";
import { AsyncPipe, NgIf } from "@angular/common";
import { Materiaux } from "../../../../core/models/materiaux/materiaux";
import { MateriauService } from "../../../../service/materiau/materiau.service";
import { MonoMaterial } from "../../../../core/models/mono-material/mono-material";
import { MonoMaterialService } from "../../../../service/mono-material/mono-material.service";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NavbarComponent,
    TableComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  protected produits$: Observable<Produit[]>;
  protected materiaux$: Observable<Materiaux[]>;
  protected monoMaterial$: Observable<MonoMaterial[]>;

  protected columnsMonoMaterial: { key: string, title: string }[] = [
    { key: 'name', title: 'Nom' },
    { key: 'material', title: 'Materiau' },
    { key: 'recyclability', title: 'Recyclabilité' }
  ];

  protected columnsMateriaux: { key: string, title: string }[] = [
    { key: 'nomMateriau', title: 'Nom du materiaux' },
    { key: 'typeRecyclage', title: 'Type de recyclage' },
    { key: 'coutRecyclage', title: 'Cout de recyclage' },
    { key: 'energieRecyclage', title: 'Energie de recyclage' }
  ];

  protected columnsProduits: { key: string, title: string }[] = [
    { key: 'nomProduit', title: 'Nom du produit' },
    { key: 'description', title: 'Description' },
    { key: 'scoreRecyclabilite', title: 'Score recyclabilité' },
    { key: 'poids', title: 'Poids' },
    { key: 'volume', title: 'Volume' },
    { key: 'file', title: 'Fichier' },
    { key: 'tags', title: 'Tags' }
  ];



  constructor(
    private readonly produitService: ProduitService,
    private readonly materiauService: MateriauService,
    private readonly monoMaterialService: MonoMaterialService
  ) {
    this.produits$ = this.produitService.getAllProduits();
    this.materiaux$ = this.materiauService.getAllMateriaux();
    this.monoMaterial$ = this.monoMaterialService.getAllMonoMaterials();
  }

}
