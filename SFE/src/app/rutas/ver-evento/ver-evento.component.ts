import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import { Evento } from 'src/app/interfaces/Evento';
import { Eventomedicamento } from 'src/app/interfaces/Eventomedicamento';
import { Medicamento } from 'src/app/interfaces/Medicamento';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.css']
})
export class VerEventoComponent implements OnInit {
  evento: Evento;
  eventoMedicamento: Eventomedicamento[] = [];
  medicamentos: Medicamento[] = [];
  medicamentosamostrar:Medicamento[]=[];
  constructor(private readonly _eventoServicio: EventoService, private readonly _route: ActivatedRoute) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {
          const eventoEncontrado = this._eventoServicio
            .findOneById(+parametros.idEvento).subscribe(

              (eventoObtenido: Evento) => {

                this.eventoMedicamento = eventoObtenido.eventomedicamentofk;
                //console.log('Se obtubo:', this.eventoMedicamento );
                //console.log('Se obtubo:', this.usuarioAactualizar.correo_usuario);

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
      (eventomedicamento:Eventomedicamento) => {
        const evento:string=eventomedicamento.medicamentofk+""
        
       medicamentosencontrados.forEach(
           (medicamento)=>{
             if(medicamento.id==evento){
              
              this.medicamentosamostrar.push(medicamento);
             }
            
           });
      }
    );

  }

}
