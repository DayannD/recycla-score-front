import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonoMaterialRoutingModule} from "./mono-material-routing.module";
import {AcceuilComponent} from "./pages/list-material/acceuil.component";



@NgModule({
  declarations: [AcceuilComponent],
  imports: [
    CommonModule,
    MonoMaterialRoutingModule,
  ]
})
export class MonoMaterialModule { }
