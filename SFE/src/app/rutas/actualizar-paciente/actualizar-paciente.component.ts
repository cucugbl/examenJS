import { Component, OnInit } from '@angular/core';
import { PacientesMedicamentosService } from 'src/app/servicios/pacientes-medicamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/Paciente';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {
  paciente: Paciente;

  constructor(private readonly _PacientesService: PacientesMedicamentosService,
    private readonly _route: ActivatedRoute, private _routerN: Router) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {

          // parametros ->  {idUsuario:"1"}
          this._PacientesService
            .findOneById(+parametros.idPaciente).subscribe(

              (pacienteObtenido: Paciente) => {
                this.paciente = pacienteObtenido;
                
              },
              (error) => {
                console.error('Error', error);
              });
        }
      );
  }
  actualizar(p:Paciente){
    this._PacientesService.updateOnePacienteById(p).subscribe(
      (paciente: Paciente) => {
        //console.log(usuarioActualizado);
        alert("paciente actualizado");
        this._routerN.navigate(['/home']);
      },
      (error) => { console.error('Error', error); }
    );

  }
}
