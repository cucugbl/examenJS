import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarseRComponent } from './rutas/registrarse-r/registrarse-r.component';
import {CalendarModule, InputTextModule, PasswordModule} from "primeng/primeng";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from "primeng/button";
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from "primeng/table";
import {PanelModule} from "primeng/panel";
import { LoginComponent } from './rutas/login/login.component';
import { HomeRComponent } from './rutas/home-r/home-r.component';
import { AdministrarUsuariosComponent } from './rutas/administrar-usuarios/administrar-usuarios.component';
import { ActualizarUsuarioComponent } from './rutas/actualizar-usuario/actualizar-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { EventosRComponent } from './rutas/eventos-r/eventos-r.component';
import { VerEventoComponent } from './rutas/ver-evento/ver-evento.component';
import { MedicamentosFormularioComponent } from './componentes/medicamentos-formulario/medicamentos-formulario.component';
import { AnadirMedicamentosComponent } from './rutas/anadir-medicamentos/anadir-medicamentos.component';
import { PadresHijosComponent } from './rutas/padres-hijos/padres-hijos.component';
import { FormularioPadreHijoComponent } from './componentes/formulario-padre-hijo/formulario-padre-hijo.component';
import { AnadirPacienteComponent } from './rutas/anadir-paciente/anadir-paciente.component';
import { ActualizarPacienteComponent } from './rutas/actualizar-paciente/actualizar-paciente.component';
import { AnadirMedicamentosAPacienteComponent } from './rutas/anadir-medicamentos-a-paciente/anadir-medicamentos-a-paciente.component';
import { FormularioHijoPadreComponent } from './componentes/formulario-hijo-padre/formulario-hijo-padre.component';
import { ActualizarMedicamentosAPacienteComponent } from './rutas/actualizar-medicamentos-a-paciente/actualizar-medicamentos-a-paciente.component';
import { GestionFacturasComponent } from './rutas/gestion-facturas/gestion-facturas.component';
import { GestionDetalleFacturaComponent } from './rutas/gestion-detalle-factura/gestion-detalle-factura.component';
import { AnadirItemComponent } from './rutas/anadir-item/anadir-item.component';
import { ListaDeFacturasComponent } from './rutas/lista-de-facturas/lista-de-facturas.component';
import { VerDetalleFacturaComponent } from './rutas/ver-detalle-factura/ver-detalle-factura.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormularioCabeceraFacturaComponent } from './componentes/formulario-cabecera-factura/formulario-cabecera-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseRComponent,
    LoginComponent,
    HomeRComponent,
    AdministrarUsuariosComponent,
    ActualizarUsuarioComponent,
    FormularioUsuarioComponent,
    EventosRComponent,
    VerEventoComponent,
    MedicamentosFormularioComponent,
    AnadirMedicamentosComponent,
    PadresHijosComponent,
    FormularioPadreHijoComponent,
    AnadirPacienteComponent,
    ActualizarPacienteComponent,
    AnadirMedicamentosAPacienteComponent,
    FormularioHijoPadreComponent,
    ActualizarMedicamentosAPacienteComponent,
    GestionFacturasComponent,
    GestionDetalleFacturaComponent,
    AnadirItemComponent,
    ListaDeFacturasComponent,
    VerDetalleFacturaComponent,
    FormularioCabeceraFacturaComponent
  ],
  imports: [
    BrowserModule, ButtonModule,CalendarModule, PasswordModule,
    AppRoutingModule,FormsModule,InputTextModule,
    HttpClientModule,AccordionModule,BrowserAnimationsModule,NgbModule,
    TableModule,
    PanelModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
