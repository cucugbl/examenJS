import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';
import { PacientesMedicamentosService } from 'src/app/servicios/pacientes-medicamentos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anadir-paciente',
  templateUrl: './anadir-paciente.component.html',
  styleUrls: ['./anadir-paciente.component.css']
})
export class AnadirPacienteComponent implements OnInit {
  paciente: Paciente = {};

  constructor(private readonly _PacientesService: PacientesMedicamentosService,
    private readonly _route: ActivatedRoute, private _routerN: Router) { }

  ngOnInit() {

    

  }
  crearPasiente(pacienteRecibido: Paciente) {

    this._PacientesService.crearPaciente(pacienteRecibido).subscribe(
      (paciente: Paciente) => {
        //console.log(usuarioActualizado);
        alert("paciente creado");
        this._routerN.navigate(['/home']);
      },
      (error) => { console.error('Error', error); }
    );

  }
}
