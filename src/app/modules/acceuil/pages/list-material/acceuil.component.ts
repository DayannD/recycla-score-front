// src/app/components/acceuil/acceuil.component.ts
import { Component } from '@angular/core';
import { ProduitService } from "../../../../service/materiaux/produit.service";


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  public tag = 'GLASS';
  public produits$;

  constructor(
    private readonly produitService: ProduitService
  ) {
    this.produits$ = this.produitService.getProduits(this.tag);
  }

  onTagSelected(tag: string): void {
    this.tag = tag;
      this.produits$ = this.produitService.getProduits(this.tag);
  }
}
