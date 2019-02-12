import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarseRComponent } from './rutas/registrarse-r/registrarse-r.component';
import { LoginComponent } from './rutas/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'registrarse'
  },
  {
    // NOMBRE
    path: 'registrarse',
    component: RegistrarseRComponent,
    // COMPONENTE
    // children: [
    //   {}]
  },
  {
    // NOMBRE
    path: 'login',
    component: LoginComponent,
    // COMPONENTE
    // children: [
    //   {}]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
