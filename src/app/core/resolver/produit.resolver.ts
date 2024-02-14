import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ProduitService } from "../../service/Produit/produit.service";
import { filter, Observable, take } from "rxjs";
import { InfosProduit } from "../models/infos-produit/infos-produit";

export const produitResolver: ResolveFn<Observable<InfosProduit>> = (
  route,
  state,
  produitService = inject(ProduitService)
) => {
  return produitService.getOneProduit(route.params['id'])
};
