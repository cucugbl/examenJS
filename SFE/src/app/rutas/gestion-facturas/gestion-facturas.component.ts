import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/servicios/evento.service';
import { ActivatedRoute } from '@angular/router';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';

@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit {
  eventoid: number;
  facturaCabecera:Facturacabecera[];
  constructor(
    private readonly _eventoServicio: EventoService, private readonly _route: ActivatedRoute
  ) { 

    
  }

  ngOnInit() {
    
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {
          const eventoEncontrado = this._eventoServicio
            .findOneById(+parametros.idEvento).subscribe(

              (eventoObtenido: Evento) => {
                this.eventoid=eventoObtenido.id;
                //console.log('Se obtubo:', eventoObtenido);
                this.facturaCabecera=eventoObtenido.facturacabecerafk;
                
                //console.log('Se obtubo:', this.usuarioAactualizar.correo_usuario);

              },
              (error) => {
                console.error('Error', error);
              });
        }
      );
  }


}
