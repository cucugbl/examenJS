import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';
import { PacientesMedicamentosService } from 'src/app/servicios/pacientes-medicamentos.service';
import { Medicamento } from 'src/app/interfaces/Medicamento';

@Component({
  selector: 'app-padres-hijos',
  templateUrl: './padres-hijos.component.html',
  styleUrls: ['./padres-hijos.component.css']
})
export class PadresHijosComponent implements OnInit {
  pacientes:Paciente[];
  medicamentos:Medicamento[];
  mostrarbol:boolean=false;
  constructor(private readonly _eventoServicio: PacientesMedicamentosService) { }

  ngOnInit() {
    this._eventoServicio.findAllPacientes().subscribe(
      (pacientesR: Paciente[]) => {
        this.pacientes = pacientesR;
        
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
  eliminar(pacienteE: Paciente) {

    this._eventoServicio.deletePaciente(+pacienteE.id).subscribe(

      (pacienteeliminado: Paciente) => {
        //console.log('Se elimino:', pacienteeliminado);

        //eliminando del arreglo
        const indice = this.pacientes
        .findIndex((u) => u.id === pacienteE.id);
        this.pacientes.splice(indice, 1);
      },
      (error) => {
        console.error('Error', error);
      }
    );

  }

  verHijos(paciente:Paciente){
    this.medicamentos=paciente.medicamentofk;
   // console.log(this.medicamentos=paciente.medicamentofk);
  }
  eliminarHijo(medicamentoE:Medicamento){

//console.log(medicamentoE)
    this._eventoServicio.deleteMedicamentoPaciente(+medicamentoE.id).subscribe(

      (mEliminado: Medicamento) => {
        //console.log('Se elimino:', pacienteeliminado);

        //eliminando del arreglo
        const indice = this.medicamentos
        .findIndex((u) => u.id === mEliminado.id);
        this.medicamentos.splice(indice, 1);
      },
      (error) => {
        console.error('Error', error);
      }
    );

  }
  muestra_medicamento(){
    this.mostrarbol=true;
    
  }

}
