import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarseRComponent } from './rutas/registrarse-r/registrarse-r.component';
import { LoginComponent } from './rutas/login/login.component';
import { HomeRComponent } from './rutas/home-r/home-r.component';
import { AdministrarUsuariosComponent } from './rutas/administrar-usuarios/administrar-usuarios.component';
import { ActualizarUsuarioComponent } from './rutas/actualizar-usuario/actualizar-usuario.component';
import { EventosRComponent } from './rutas/eventos-r/eventos-r.component';
import { VerEventoComponent } from './rutas/ver-evento/ver-evento.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
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
    // children: [administrar-usuarios
    //   {}]
  },

  {
    path: 'home',
    component: HomeRComponent,
    children: [{
      path: 'administrar-usuarios',
      component: AdministrarUsuariosComponent,
    },
    {
      path: 'actualizar-usuario/:idUsuario',
      component: ActualizarUsuarioComponent,
    },
    {
      path: 'eventos',
      component: EventosRComponent,
    }
    ,
    {
      path: 'ver-evento/:idEvento',
      component: VerEventoComponent,
    }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
