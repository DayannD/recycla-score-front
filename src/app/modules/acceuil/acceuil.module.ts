import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcceuilComponent} from "./pages/acceuil/acceuil.component";
import {MonoMaterialFormComponent} from "../../shared/components/mono-material-form/mono-material-form.component";
import { AcceuilRoutingModule } from "./acceuil-routing.module";

@NgModule({
  declarations: [AcceuilComponent],
  imports: [
    CommonModule,
    MonoMaterialFormComponent,
    AcceuilRoutingModule
  ]
})
export class AcceuilModule { }
