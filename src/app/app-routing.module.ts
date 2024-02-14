import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { authGuard } from "./core/guard/AuthGuard/auth.guard";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    canActivate: [authGuard],
    component: LayoutComponent,
    loadChildren: () => import('./modules/main.module').then(m => m.MainModule)
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
