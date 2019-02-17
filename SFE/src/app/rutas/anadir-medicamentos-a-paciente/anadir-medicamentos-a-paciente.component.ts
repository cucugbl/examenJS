import { Component, OnInit } from '@angular/core';
import { PacientesMedicamentosService } from 'src/app/servicios/pacientes-medicamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/Paciente';
import { Medicamento } from 'src/app/interfaces/Medicamento';
@Component({
  selector: 'app-anadir-medicamentos-a-paciente',
  templateUrl: './anadir-medicamentos-a-paciente.component.html',
  styleUrls: ['./anadir-medicamentos-a-paciente.component.css']
})
export class AnadirMedicamentosAPacienteComponent implements OnInit {
  paciente: Paciente;
  medicamento:Medicamento={};

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


  crearMedicamento(medicamentoRecibido:Medicamento){
    const idPaciente=this.paciente.id
    medicamentoRecibido.pacientefk=this.paciente.id+"";

    this._PacientesService.crearMedicamentoPaciente(medicamentoRecibido).subscribe(
      (medicamento: Medicamento) => {
        //console.log(usuarioActualizado);
        const idMedicamento=medicamento.id;
        this._PacientesService.addRelacionPacienteMedicamento(idPaciente+"",idMedicamento).subscribe(
          (resp: string) => {
            alert("medicamento creado al paciente");
          },
          (error) => { console.error('Error', error); }
        );

        
        this._routerN.navigate(['/home']);
      },
      (error) => { console.error('Error', error); }
    );


  }
}
