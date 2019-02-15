import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarseRComponent } from './rutas/registrarse-r/registrarse-r.component';
import { LoginComponent } from './rutas/login/login.component';
import { HomeRComponent } from './rutas/home-r/home-r.component';
import { AdministrarUsuariosComponent } from './rutas/administrar-usuarios/administrar-usuarios.component';
import { ActualizarUsuarioComponent } from './rutas/actualizar-usuario/actualizar-usuario.component';
import { EventosRComponent } from './rutas/eventos-r/eventos-r.component';
import { VerEventoComponent } from './rutas/ver-evento/ver-evento.component';
import { AnadirMedicamentosComponent } from './rutas/anadir-medicamentos/anadir-medicamentos.component';
import { PadresHijosComponent } from './rutas/padres-hijos/padres-hijos.component';
import { AnadirPacienteComponent } from './rutas/anadir-paciente/anadir-paciente.component';
import { ActualizarPacienteComponent } from './rutas/actualizar-paciente/actualizar-paciente.component';
import { AnadirMedicamentosAPacienteComponent } from './rutas/anadir-medicamentos-a-paciente/anadir-medicamentos-a-paciente.component';
import { ActualizarMedicamentosAPacienteComponent } from './rutas/actualizar-medicamentos-a-paciente/actualizar-medicamentos-a-paciente.component';
import { GestionFacturasComponent } from './rutas/gestion-facturas/gestion-facturas.component';
import { GestionDetalleFacturaComponent } from './rutas/gestion-detalle-factura/gestion-detalle-factura.component';
import { AnadirItemComponent } from './rutas/anadir-item/anadir-item.component';
import { ListaDeFacturasComponent } from './rutas/lista-de-facturas/lista-de-facturas.component';
import { VerDetalleFacturaComponent } from './rutas/ver-detalle-factura/ver-detalle-factura.component';


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
    } ,
    {
      path: 'anadir-medicamentos/:idEvento',
      component: AnadirMedicamentosComponent,
    },
    {
      path: 'padres-hijos',
      component: PadresHijosComponent,
    },
    {
      path: 'anadir-paciente',
      component: AnadirPacienteComponent,
    },
    {
      path: 'actualizar-paciente/:idPaciente',
      component: ActualizarPacienteComponent,
    }
    ,
    {
      path: 'anadir-medicamentos-a-paciente/:idPaciente',
      component: AnadirMedicamentosAPacienteComponent,
    },
    {
      path: 'actualizar-medicamentos-a-paciente/:idMedicameto',
      component: ActualizarMedicamentosAPacienteComponent,
    },
    
    {
      path: 'gestion-facturas/:idEvento',
      component: GestionFacturasComponent,
    },
    
    {
      path: 'gestion-detalle-factura/:idFactura/:idEvento',
      component: GestionDetalleFacturaComponent,
    },
    
    {
      path: 'anadir-item/:idFactura/:idEvento',
      component: AnadirItemComponent,
    },
    
    {
      path: 'lista-de-facturas',
      component: ListaDeFacturasComponent,
    },
    
    {
      path: 'ver-detalle-factura/:idFactura',
      component: VerDetalleFacturaComponent,
    }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
