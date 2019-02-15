import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import { Evento } from 'src/app/interfaces/Evento';
import { Medicamento } from 'src/app/interfaces/Medicamento';
import { Eventomedicamento } from 'src/app/interfaces/Eventomedicamento';
import { EventoMedicamentoAGUARDAR } from 'src/app/interfaces/EventoMedicamentoAGUARDAR';
@Component({
  selector: 'app-anadir-medicamentos',
  templateUrl: './anadir-medicamentos.component.html',
  styleUrls: ['./anadir-medicamentos.component.css']
})
export class AnadirMedicamentosComponent implements OnInit {
  eventoObtenido: Evento = {};
  medicamentos: Medicamento[];
  eventoMedicamento: Eventomedicamento[] = [];
  medicamentosamostrar:Medicamento[]=[];
  eventoMedicamentoAAgregar:EventoMedicamentoAGUARDAR={};
  ideventoActual:number;
  bool: boolean;
mednuevo:Medicamento;
  constructor(private readonly _eventoServicio: EventoService,
    private readonly _route: ActivatedRoute) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {

          // parametros ->  {idUsuario:"1"}
          const eventoEncontrado = this._eventoServicio
            .findOneById(+parametros.idEvento).subscribe(

              (evento: Evento) => {

                this.eventoObtenido = evento;
                this.eventoMedicamento = evento.eventomedicamentofk;
                this.ideventoActual=evento.id;
              },
              (error) => {
                console.error('Error', error);
              });

              
        }
      );
    this.obtenerMedicamentos();
  }
  obtenerMedicamentos() {
    this._eventoServicio.findAllMedicamentos().subscribe(
      (medicamentosencontrados: Medicamento[]) => {
        //console.log(medicamentosencontrados);
        this.medicamentos = medicamentosencontrados;
        this.seleccionarMedicamentos(medicamentosencontrados);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  seleccionarMedicamentos(medicamentosencontrados: Medicamento[]) {
    this.eventoMedicamento.forEach(
      (eventomedicamento: Eventomedicamento) => {
        const evento: string = eventomedicamento.medicamentofk + ""

        medicamentosencontrados.forEach(
          (medicamento) => {
            if (medicamento.id == evento) {

              this.medicamentosamostrar.push(medicamento);
            }

          });
      }
    );
  }
  eliminarMedicamento(m:Medicamento ) {
   // const id: string = this.usuarioAactualizar.id;

    this._eventoServicio.deleteByIdMedicamento(m.id).subscribe(
      (resp: Medicamento) => {
        console.log(resp);

        const indice = this.medicamentosamostrar
          .findIndex((u) => u.id === resp.id);
        this.medicamentosamostrar.splice(indice, 1);

      },
      (error) => { console.error('Error', error); }
    );

  }

  agregarHijoaEvento(){
    const idMedicamento = (<HTMLInputElement>document.getElementById("selectMateria")).value;
    this.eventoMedicamentoAAgregar.eventofk=this.eventoObtenido.id+"";
    this.eventoMedicamentoAAgregar.medicamentofk=idMedicamento;
    //this.eventoMedicamentoAAgregar.medicamentofk.push(this.medicamentos.find(m=>m.id.valueOf()==idMedicamento.valueOf()));
    //this.eventoMedicamentoAAgregar.eventofk.push(this.eventoObtenido);
    
    if (this.medicamentosamostrar.some((m) => m.id.valueOf() == idMedicamento.valueOf())) {
      this.bool = true;
      setTimeout(()=>{this.bool=false},700);
      //      alert (" usuario ya tiene ese rol");
    }
    else {
      //console.log(this.eventoMedicamentoAAgregar);
      this._eventoServicio.crearEventoMedicamento(this.eventoMedicamentoAAgregar).subscribe(
        (em: Eventomedicamento) => {
          console.log(em);
          this.mednuevo=em.medicamentofk;
          //alert("se agrego el medicamnto");
          
         this.medicamentosamostrar.push(this.mednuevo);
        },
        (error) => { console.error('Error', error); }
      );
    }
  }

}