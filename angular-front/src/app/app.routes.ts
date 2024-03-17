import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '',
  loadChildren: () => import('./modules/regular-home/regular-home.module').then(mod => mod.RegularHomeModule)},

  {path: 'login',
  loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
