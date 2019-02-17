import { Component, OnInit } from '@angular/core';
import { PacientesMedicamentosService } from 'src/app/servicios/pacientes-medicamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/Paciente';
import { Medicamento } from 'src/app/interfaces/Medicamento';


@Component({
  selector: 'app-actualizar-medicamentos-a-paciente',
  templateUrl: './actualizar-medicamentos-a-paciente.component.html',
  styleUrls: ['./actualizar-medicamentos-a-paciente.component.css']
})
export class ActualizarMedicamentosAPacienteComponent implements OnInit {
  medicamento: Medicamento;
  pacientes: Paciente = {};
  arregloIdPacientes: number[];
  constructor(
    private readonly _PacientesService: PacientesMedicamentosService,
    private readonly _route: ActivatedRoute, private _routerN: Router) { }


  ngOnInit() {


    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {

          // parametros ->  {idUsuario:"1"}
          this._PacientesService
            .findOneByIdMedicamento(+parametros.idMedicameto).subscribe(

              (medicamentoObt: Medicamento) => {
                this.medicamento = medicamentoObt;
                //this.pacientes = medicamentoObt.pacientefk;
                

              },
              (error) => {
                console.error('Error', error);
              });
        }
      );
  }

  actualizarMedicamento(medicamentoRecibido: Medicamento) {
    
    medicamentoRecibido.pacientefk = undefined;
    this._PacientesService.updateOneMedicamentoById(medicamentoRecibido).subscribe(
      (medicamento: Medicamento) => {
        alert("medicamento actualizado al paciente");
        this._routerN.navigate(["/home","padres-hijos"]);
      },
      (error) => { console.error('Error', error); }
    );
  }



}
