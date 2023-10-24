import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./pages/list-material/acceuil.component";

const MonoMaterialRoutes: Routes = [
  { path: '', component: AcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(MonoMaterialRoutes)],
  exports: [RouterModule]
})
export class MonoMaterialRoutingModule { }
