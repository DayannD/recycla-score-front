import { ResolveFn } from '@angular/router';
import { Observable } from "rxjs";
import { InfosProduit } from "../../models/infos-produit/infos-produit";
import { inject } from "@angular/core";
import { ProduitService } from "../../../service/Produit/produit.service";
import { Materiaux } from "../../models/materiaux/materiaux";
import { MateriauService } from "../../../service/materiau/materiau.service";

export const materiauResolver: ResolveFn<Materiaux> = (route, state, materiauService=inject(MateriauService)) => {
  return materiauService.getOneMateriau(route.params['id'])
};

