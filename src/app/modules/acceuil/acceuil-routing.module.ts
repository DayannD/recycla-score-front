import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./pages/acceuil/acceuil.component";
import { ListMonoMaterialComponent } from "./pages/list-mono-material/list-mono-material.component";
import { InfosItemComponent } from "./pages/infos-item/infos-item.component";
import { produitResolver } from "../../core/resolver/produit.resolver";

const AcceuilRoutes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'mono-material', component: ListMonoMaterialComponent },
  { path: 'produit/:id', component: InfosItemComponent,
    resolve: {
      produit: produitResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(AcceuilRoutes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
