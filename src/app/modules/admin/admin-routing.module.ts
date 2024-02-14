import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./pages/acceuil-admin/admin.component";
import { AddMonoMaterialsComponent } from "./pages/add-mono-materials/add-mono-materials.component";
import { AddMateriauComponent } from "./pages/add-materiau/add-materiau.component";
import { AddProduitComponent } from "./pages/add-produit/add-produit.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
