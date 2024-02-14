import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from "./acceuil/pages/acceuil/acceuil.component";

const routes: Routes = [
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'mono-material',
    loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
