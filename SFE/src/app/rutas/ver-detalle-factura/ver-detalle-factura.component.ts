import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from 'src/app/servicios/factura.service';
import { Facturadetalle } from 'src/app/interfaces/Facturadetalle';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';

@Component({
  selector: 'app-ver-detalle-factura',
  templateUrl: './ver-detalle-factura.component.html',
  styleUrls: ['./ver-detalle-factura.component.css']
})
export class VerDetalleFacturaComponent implements OnInit {
  facturaCabeceraObtenidaPrincipio: Facturacabecera = {};
  todasLasFacturasDetallesObtenidas: Facturadetalle[];
  facturDetallePorCabeceraAmostrar:Facturadetalle[]=[];
  constructor(private readonly _facturaServicio: FacturaService, private readonly _route: ActivatedRoute) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {
          const eventoEncontrado = this._facturaServicio
            .findOneCabeceraById(+parametros.idFactura).subscribe(

              (cabecera: Facturacabecera) => {

                this.facturaCabeceraObtenidaPrincipio = cabecera;
                //console.log('Se obtubo:', this.eventoMedicamento );
                //console.log('Se obtubo:', this.usuarioAactualizar.correo_usuario);

              },
              (error) => {
                console.error('Error', error);
              });
        }
      );
    this.obtenerTodosLasFacturadetalles();
  }

  obtenerTodosLasFacturadetalles() {
    this._facturaServicio.findAllDetallesFactura().subscribe(
      (todasFacturas: Facturadetalle[]) => {
        this.todasLasFacturasDetallesObtenidas = todasFacturas;
        if(todasFacturas){
          console.log(this.todasLasFacturasDetallesObtenidas);  
          this.filtrarFacturasDetalle();}
      },
      (error) => {
        console.error('Error', error);
      });
      
      
      
  }
  filtrarFacturasDetalle(){
    this.todasLasFacturasDetallesObtenidas.forEach(
      (fd)=>{console.log(fd) ;
        if(fd.facturacabecerafk.id.valueOf()==this.facturaCabeceraObtenidaPrincipio.id.valueOf()){
          
          this.facturDetallePorCabeceraAmostrar.push(fd);
        }
      }
    );
  }
}
