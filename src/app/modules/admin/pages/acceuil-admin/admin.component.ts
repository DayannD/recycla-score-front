import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../layout/navbar/navbar.component";
import { TableComponent } from "../../../../shared/components/table/table.component";
import { Produit } from 'src/app/core/models/produit/produit';
import { Observable, tap } from "rxjs";
import { ProduitService } from "../../../../service/Produit/produit.service";
import { AsyncPipe, NgIf } from "@angular/common";
import { Materiaux } from "../../../../core/models/materiaux/materiaux";
import { MateriauService } from "../../../../service/materiau/materiau.service";
import { MonoMaterial } from "../../../../core/models/mono-material/mono-material";
import { MonoMaterialService } from "../../../../service/mono-material/mono-material.service";
import { Router } from "@angular/router";

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
    protected readonly produitService: ProduitService,
    protected readonly materiauService: MateriauService,
    protected readonly monoMaterialService: MonoMaterialService,
    private readonly router: Router
  ) {
    this.produits$ = this.produitService.getAllProduits();
    this.materiaux$ = this.materiauService.getAllMateriaux();
    this.monoMaterial$ = this.monoMaterialService.getAllMonoMaterials();
  }

  onDelete($event: number, service: ProduitService | MateriauService | MonoMaterialService) {
    console.log($event);
    switch (service) {
      case this.produitService:
        this.produitService.deleteById($event).subscribe(() => {
          this.produits$ = this.produitService.getAllProduits();
        });
        break;
      case this.materiauService:
        this.materiauService.deleteBYId($event).subscribe(() => {
          this.materiaux$ = this.materiauService.getAllMateriaux();
        });
        break;
      case this.monoMaterialService:
        this.monoMaterialService.deleteById($event).subscribe(() => {
          this.monoMaterial$ = this.monoMaterialService.getAllMonoMaterials();
        });
        break;
    }
  }

  onEdit($event: number, service: MonoMaterialService | MateriauService | ProduitService) {
    console.log($event);
    switch (service) {
      case this.produitService:
            this.router.navigate(['/admin/edit/produit', $event]);
            break;
      case this.materiauService:
            this.router.navigate(['/admin/edit/materiau', $event]);
            break;
      case this.monoMaterialService:
            this.router.navigate(['/admin/edit/mono-materials', $event]);
        break;
    }
  }
}
