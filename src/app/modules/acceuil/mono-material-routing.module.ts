import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./pages/list-material/acceuil.component";
import {AddObjectComponent} from "./pages/add-object/add-object.component";

const MonoMaterialRoutes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'add', component: AddObjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(MonoMaterialRoutes)],
  exports: [RouterModule]
})
export class MonoMaterialRoutingModule { }
