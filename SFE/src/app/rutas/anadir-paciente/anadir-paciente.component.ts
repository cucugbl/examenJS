import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';
import { PacientesMedicamentosService } from 'src/app/servicios/pacientes-medicamentos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/servicios/auth.service';
import { PacienteAGUARDAR } from 'src/app/interfaces/PacienteAGUARDAR';

@Component({
  selector: 'app-anadir-paciente',
  templateUrl: './anadir-paciente.component.html',
  styleUrls: ['./anadir-paciente.component.css']
})
export class AnadirPacienteComponent implements OnInit {
  paciente: Paciente = {};
  pacienteAguardar: PacienteAGUARDAR = {};

  constructor(private readonly _PacientesService: PacientesMedicamentosService,
    private readonly _route: ActivatedRoute, private _routerN: Router,
    private readonly _authService: AuthService,
  ) { }

  ngOnInit() {



  }
  crearPasiente(pacienteRecibido: Paciente) {

    this.pacienteAguardar.usuariofk = this._authService.usuarioLogueado.id;
    this.pacienteAguardar.nombre_paciente = pacienteRecibido.nombre_paciente;
    this.pacienteAguardar.apellido_paciente = pacienteRecibido.apellido_paciente;
    this.pacienteAguardar.fecha_naciemiento_paciente = pacienteRecibido.fecha_naciemiento_paciente;
    this.pacienteAguardar.hijos_paciente = pacienteRecibido.hijos_paciente;
    this.pacienteAguardar.seguro_paciente = pacienteRecibido.seguro_paciente;




    console.log(this._authService.usuarioLogueado.id);
    this._PacientesService.crearPaciente(this.pacienteAguardar).subscribe(
      (paciente: Paciente) => {
        //console.log(usuarioActualizado);
        alert("paciente creado");
        this._routerN.navigate(['/home']);
      },
      (error) => { console.error('Error', error); }
    );

  }
}
