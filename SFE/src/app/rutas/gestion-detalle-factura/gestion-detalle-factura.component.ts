import { Component, OnInit } from '@angular/core';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';
import { FacturaService } from 'src/app/servicios/factura.service';
import { ActivatedRoute } from '@angular/router';
import { Facturadetalle } from 'src/app/interfaces/Facturadetalle';
import { EventoService } from 'src/app/servicios/evento.service';
import { Evento } from 'src/app/interfaces/Evento';

@Component({
  selector: 'app-gestion-detalle-factura',
  templateUrl: './gestion-detalle-factura.component.html',
  styleUrls: ['./gestion-detalle-factura.component.css']
})
export class GestionDetalleFacturaComponent implements OnInit {
  facturaCabecera:Facturacabecera={};
  facturaDetalle:Facturadetalle[];
  eventoObt:Evento={};
  constructor(private readonly _facturaServicio: FacturaService, private readonly _route: ActivatedRoute, private readonly _eventoservicio: EventoService) { }

  ngOnInit() {

    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {
          const fdEncontrada = this._facturaServicio
           .findOneCabeceraById(+parametros.idFactura).subscribe(

              (fcObtenida: Facturacabecera) => {
                this.facturaCabecera=fcObtenida;
                this.facturaDetalle=fcObtenida.facturadetallefk;
                
                //console.log('Se obtubo:', this.usuarioAactualizar.correo_usuario);

              },
              (error) => {
                console.error('Error', error);
              });
        }
      );

      rutaActiva$.subscribe(
        (parametros)=>{
          this._eventoservicio
           .findOneById(+parametros.idEvento).subscribe(
            (eventoObtenido: Evento) => {

           this.eventoObt=eventoObtenido;
            },
            (error) => {
              console.error('Error', error);
            });
        }
        ); 
  }

}
