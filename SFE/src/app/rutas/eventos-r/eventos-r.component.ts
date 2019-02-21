import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-eventos-r',
  templateUrl: './eventos-r.component.html',
  styleUrls: ['./eventos-r.component.css']
})


export class EventosRComponent implements OnInit {
  busqueda;
  eventos: Evento[] = []
  eventosAux: Evento[] = []
  eventosEncontrados: Evento[] = []
  constructor(private readonly _eventoServicio: EventoService) { }

  ngOnInit() {
    
    this._eventoServicio.findAll().subscribe(
      (eventosR: Evento[]) => {
        this.eventos = eventosR;
        this.eventosAux = eventosR;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }


  buscarUsuariosEnToltales(){
    if(this.busqueda){
      this.eventos=this.eventosAux;
      
      
      this.eventosEncontrados=this.eventos.filter(u=>u.nombre_evento==this.busqueda);
      
      this.eventos=this.eventosEncontrados;
    }else{
      this.eventos=this.eventosAux;

    }
  }

}
