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

  getImageSrc(byteString: string | undefined): string {
    if (!byteString) {
      return '';
    }

    return 'data:image/' + this.getMimeType(byteString) + ';base64,' + byteString;
  }

  getMimeType(dataUrl: string): string {
    let splitDataUrl = dataUrl.split(',');
    if (splitDataUrl.length < 2) {
      return '';
    }

    let mimeType = splitDataUrl[0].split(':')[1].split(';')[0];
    return mimeType;
  }
}
