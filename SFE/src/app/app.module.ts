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
    MedicamentosFormularioComponent
  ],
  imports: [
    BrowserModule, ButtonModule,CalendarModule, PasswordModule,
    AppRoutingModule,FormsModule,InputTextModule,
    HttpClientModule,AccordionModule,BrowserAnimationsModule,
    TableModule,
    PanelModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
