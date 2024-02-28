import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./pages/acceuil-admin/admin.component";
import { AddMonoMaterialsComponent } from "./pages/add-mono-materials/add-mono-materials.component";
import { AddMateriauComponent } from "./pages/add-materiau/add-materiau.component";
import { AddProduitComponent } from "./pages/add-produit/add-produit.component";
import { EditProduitComponent } from "./pages/edit/edit-produit/edit-produit.component";
import { EditMateriauComponent } from "./pages/edit/edit-materiau/edit-materiau.component";
import { EditMonoMaterialsComponent } from "./pages/edit/edit-mono-materials/edit-mono-materials.component";
import { materiauResolver } from "../../core/resolver/materiau/materiau.resolver";
import { monoMateriauResolver } from "../../core/resolver/mono-materiau/mono-materiau.resolver";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'add-mono-materials',
    component: AddMonoMaterialsComponent
  },
  {
    path: 'add-materiau',
    component: AddMateriauComponent
  },
  {
    path: 'add-produit',
    component: AddProduitComponent
  },
  {
    path: 'edit/produit/:id',
    component: EditProduitComponent
  },
  {
    path: 'edit/materiau/:id',
    component: EditMateriauComponent,
    resolve: {
      materiau: materiauResolver
    }
  },
  {
    path: 'edit/mono-materials/:id',
    component: EditMonoMaterialsComponent,
    resolve: {
      monoMaterial: monoMateriauResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
