import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonoMaterialRoutingModule} from "./mono-material-routing.module";
import {AcceuilComponent} from "./pages/list-material/acceuil.component";
import { AddObjectComponent } from './pages/add-object/add-object.component';
import {MonoMaterialFormComponent} from "../../shared/components/mono-material-form/mono-material-form.component";



@NgModule({
  declarations: [AcceuilComponent, AddObjectComponent],
  imports: [
    CommonModule,
    MonoMaterialRoutingModule,
    MonoMaterialFormComponent,
  ]
})
export class MonoMaterialModule { }
