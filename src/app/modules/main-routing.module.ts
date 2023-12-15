import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from "./acceuil/pages/list-material/acceuil.component";

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent,
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/mono-material.module').then(m => m.MonoMaterialModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
