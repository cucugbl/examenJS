import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/servicios/evento.service';
import { ActivatedRoute } from '@angular/router';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit {
  eventoid: number;
  facturaCabeceraPorUsuario: Facturacabecera[] = [];
  facturaCabeceraPorUsuarioAux: Facturacabecera[] = [];
  facturasCabecerasAux: Facturacabecera[];
  busqueda: string = "";
  usuariosRegistradosTotales: Usuario[] = [];
  usuariosNombreIgualBusqueda: Usuario[] = [];
  facturasCabecerasTotales: Facturacabecera[] = [];
  arregloEstadosDeCompra:string[]=["Todos","Pagado","En compra"]
  constructor(
    private readonly _eventoServicio: EventoService, private readonly _route: ActivatedRoute, private readonly _usuarioService: UsuarioService,
    private readonly _facturaservicio: FacturaService,
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

                this.eventoid = eventoObtenido.id;
                //console.log('Se obtubo:', eventoObtenido);
                this.facturasCabecerasAux = eventoObtenido.facturacabecerafk;
                //this.facturaCabecera = eventoObtenido.facturacabecerafk;

                //console.log('Se obtubo:', this.usuarioAactualizar.correo_usuario);

              },
              (error) => {
                console.error('Error', error);
              });
        }
      );

    this.obtenerTodasFacturasCabeceras();
    this.obtenerUsuariosTotales();
  }
  obtenerUsuariosTotales() {
    this._usuarioService.findAll().subscribe(
      (u: Usuario[]) => {
        this.usuariosRegistradosTotales = u;
      }, (error) => {
        console.error('Error', error);
      });
  }
  buscarFacturasEnToltalesPorcliente() {
    //this.facturaCabeceraPorUsuario=[]
    if (this.busqueda != "") {
      this.facturaCabeceraPorUsuario = []
      this.facturaCabeceraPorUsuarioAux.forEach(fc => {

        if (fc.usuariofk.nombre_usuario.toLowerCase() == this.busqueda.toLocaleLowerCase()) {
          this.facturaCabeceraPorUsuario.push(fc)
        } 
      });

    } else {
      this.facturaCabeceraPorUsuario = this.facturaCabeceraPorUsuarioAux;
    }

  }

  obtenerTodasFacturasCabeceras() {
    this._facturaservicio.findAllCabeceraFactura().subscribe(
      (fcO: Facturacabecera[]) => {
        this.facturasCabecerasAux.forEach(
          (fcAux) => {

            this.facturaCabeceraPorUsuario.push(fcO.find(fct => fct.id == fcAux.id))
            this.facturaCabeceraPorUsuarioAux = this.facturaCabeceraPorUsuario

          })

      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  estadoSeleccionadoComboBox(event:any){
    const idarregloEstadoCombo = (<HTMLInputElement>document.getElementById("selectarregloEstadosDeCompra")).value;
     console.log(idarregloEstadoCombo);

     if(idarregloEstadoCombo+""=="Pagado"){
      this.facturaCabeceraPorUsuario= this.facturaCabeceraPorUsuarioAux.filter(fc=>fc.estado_factura=="Pagado")
     }else if(idarregloEstadoCombo+""=="En compra"){
      this.facturaCabeceraPorUsuario= this.facturaCabeceraPorUsuarioAux.filter(fc=>fc.estado_factura=="En compra")
     }else{
      this.facturaCabeceraPorUsuario = this.facturaCabeceraPorUsuarioAux;
     }
  }

}
