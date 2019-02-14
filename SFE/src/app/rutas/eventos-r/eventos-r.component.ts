import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-eventos-r',
  templateUrl: './eventos-r.component.html',
  styleUrls: ['./eventos-r.component.css']
})
export class EventosRComponent implements OnInit {
  eventos: Evento[] = []
  constructor(private readonly _eventoServicio: EventoService) { }

  ngOnInit() {
    
    this._eventoServicio.findAll().subscribe(
      (eventosR: Evento[]) => {
        this.eventos = eventosR;
        
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

}
