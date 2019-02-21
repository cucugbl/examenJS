import { Component, OnInit } from '@angular/core';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';
import { FacturaService } from 'src/app/servicios/factura.service';
import { ActivatedRoute } from '@angular/router';
import { Facturadetalle } from 'src/app/interfaces/Facturadetalle';
import { EventoService } from 'src/app/servicios/evento.service';
import { Evento } from 'src/app/interfaces/Evento';
import { FacturacabeceraAGUARDAR } from 'src/app/interfaces/FacturacabeceraAGUARDAR';

@Component({
  selector: 'app-gestion-detalle-factura',
  templateUrl: './gestion-detalle-factura.component.html',
  styleUrls: ['./gestion-detalle-factura.component.css']
})
export class GestionDetalleFacturaComponent implements OnInit {
  facturaCabeceraObtenida: Facturacabecera = {};
  arregloTiposDePago: string[] = ["Efectivo", "Tarjeta", "Cheque"]
  facturaDetalle: Facturadetalle[];
  eventoObt: Evento = {};
  pruebaSrt = "";
  cabeceraFacturaAguardar: FacturacabeceraAGUARDAR = {}
  cabeceraFacturaAguardarPagado: FacturacabeceraAGUARDAR = {}
  constructor(private readonly _facturaServicio: FacturaService, private readonly _route: ActivatedRoute, private readonly _eventoservicio: EventoService) { }

  ngOnInit() {

    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {
          const fdEncontrada = this._facturaServicio
            .findOneCabeceraById(+parametros.idFactura).subscribe(

              (fcObtenida: Facturacabecera) => {
                this.facturaCabeceraObtenida = fcObtenida;
                this.facturaDetalle = fcObtenida.facturadetallefk;
                this.facturaDetalle.forEach(fd=>{
                  this.facturaCabeceraObtenida.total_factura+=Number(fd.total)})
                this.facturaCabeceraObtenida.total_factura = 0;
                this.verificarEstadoActualFactura(this.facturaCabeceraObtenida);
                this.facturaDetalle.forEach(fd => {
                  this.facturaCabeceraObtenida.total_factura += Number(fd.total);
                });
                //console.log('Se obtubo:', this.usuarioAactualizar.correo_usuario);

              },
              (error) => {
                console.error('Error', error);
              });
        }
      );

    rutaActiva$.subscribe(
      (parametros) => {
        this._eventoservicio
          .findOneById(+parametros.idEvento).subscribe(
            (eventoObtenido: Evento) => {

              this.eventoObt = eventoObtenido;
            },
            (error) => {
              console.error('Error', error);
            });
      }
    );
    
  }

  verificarEstadoActualFactura(co) {
   
    if (co.estado_factura == "Pagado") {
      (<HTMLInputElement>document.getElementById("nombre")).disabled = true;
      (<HTMLInputElement>document.getElementById("cedula")).disabled = true;
      (<HTMLInputElement>document.getElementById("telefono")).disabled = true;
      (<HTMLInputElement>document.getElementById("correo")).disabled = true;
      (<HTMLInputElement>document.getElementById("direccion")).disabled = true;
      (<HTMLInputElement>document.getElementById("estado")).disabled = true;
      (<HTMLInputElement>document.getElementById("fecha")).disabled = true;
      (<HTMLInputElement>document.getElementById("total")).disabled = true;
      (<HTMLInputElement>document.getElementById("selectarregloTiposDePago")).disabled = true;

    } else {
      this.facturaCabeceraObtenida.estado_factura = "En compra";
      (<HTMLInputElement>document.getElementById("estado")).disabled = true;
      (<HTMLInputElement>document.getElementById("total")).disabled = true;
    }

  }
  tipoPagoSeleccionadoComboBox(event: any) {

    this.facturaCabeceraObtenida.tipo_pago_factura = (<HTMLInputElement>document.getElementById("selectarregloTiposDePago")).value;
  }
  emitirFormularioValido() {

    this.cabeceraFacturaAguardar.usuariofk = this.facturaCabeceraObtenida.usuariofk.id;
    this.cabeceraFacturaAguardar.nombre_factura = this.facturaCabeceraObtenida.nombre_factura;
    this.cabeceraFacturaAguardar.cedula_factura = this.facturaCabeceraObtenida.cedula_factura;
    this.cabeceraFacturaAguardar.telefono_factura = this.facturaCabeceraObtenida.telefono_factura;
    this.cabeceraFacturaAguardar.direccion_factura = this.facturaCabeceraObtenida.direccion_factura;
    this.cabeceraFacturaAguardar.correo_factura = this.facturaCabeceraObtenida.correo_factura;
    this.cabeceraFacturaAguardar.fecha_factura = this.facturaCabeceraObtenida.fecha_factura;
    this.cabeceraFacturaAguardar.total_factura = this.facturaCabeceraObtenida.total_factura + "";
    this.cabeceraFacturaAguardar.tipo_pago_factura = this.facturaCabeceraObtenida.tipo_pago_factura;
    this.cabeceraFacturaAguardar.estado_factura = "En compra";
    this.cabeceraFacturaAguardar.id = this.facturaCabeceraObtenida.id;

    this._facturaServicio.updateOneByIdFacturaCabecera(this.cabeceraFacturaAguardar).subscribe(
      (fca) => {
        alert("Se actualizo la cabecera");
      },
      (error) => {
        console.error('Error', error);
      }
    );

  }
  pagarFactura() {
    this.cabeceraFacturaAguardarPagado.usuariofk = this.facturaCabeceraObtenida.usuariofk.id;
    this.cabeceraFacturaAguardarPagado.nombre_factura = this.facturaCabeceraObtenida.nombre_factura;
    this.cabeceraFacturaAguardarPagado.cedula_factura = this.facturaCabeceraObtenida.cedula_factura;
    this.cabeceraFacturaAguardarPagado.telefono_factura = this.facturaCabeceraObtenida.telefono_factura;
    this.cabeceraFacturaAguardarPagado.direccion_factura = this.facturaCabeceraObtenida.direccion_factura;
    this.cabeceraFacturaAguardarPagado.correo_factura = this.facturaCabeceraObtenida.correo_factura;
    this.cabeceraFacturaAguardarPagado.fecha_factura = this.facturaCabeceraObtenida.fecha_factura;
    this.cabeceraFacturaAguardarPagado.total_factura = this.facturaCabeceraObtenida.total_factura + "";
    this.cabeceraFacturaAguardarPagado.tipo_pago_factura = this.facturaCabeceraObtenida.tipo_pago_factura;
    this.cabeceraFacturaAguardarPagado.estado_factura = "Pagado";
    this.cabeceraFacturaAguardarPagado.id = this.facturaCabeceraObtenida.id;

    this._facturaServicio.updateOneByIdFacturaCabecera(this.cabeceraFacturaAguardarPagado).subscribe(
      (fca) => {
        alert("Se ha realizado el pago correctamente");
      },
      (error) => {
        console.error('Error', error);
      }
    );

  }

  
}
