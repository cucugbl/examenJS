import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura.service';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';
import { AuthService } from 'src/app/servicios/auth.service';
import { FacturacabeceraAGUARDAR } from 'src/app/interfaces/FacturacabeceraAGUARDAR';

@Component({
  selector: 'app-lista-de-facturas',
  templateUrl: './lista-de-facturas.component.html',
  styleUrls: ['./lista-de-facturas.component.css']
})
export class ListaDeFacturasComponent implements OnInit {
  mostrarFormulario:boolean=false;
  facturasInicialmenteObtenidas: Facturacabecera[] = [];
  cabeceraFacturaEnviada: Facturacabecera = {};
  cabeceraFacturaAguardar:FacturacabeceraAGUARDAR={};
  constructor(private readonly _facturaServicio: FacturaService, private readonly _authServicio:AuthService) { }

  ngOnInit() {
    this._facturaServicio.findAllCabeceraFactura().subscribe(
      (facturasObtenidas: Facturacabecera[]) => {
        this.facturasInicialmenteObtenidas = facturasObtenidas;

      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
  abrirFormulario(){
    console.log("dqwe");
    this.mostrarFormulario=true;
  }
  cerrarFormulario(){
    this.mostrarFormulario=false;
  }
  
  crearCabeceraFactura(facturaCabeceraObtenidaFormulario: Facturacabecera) {
    
    this.cabeceraFacturaAguardar.usuariofk = this._authServicio.usuarioLogueado.id;
    this.cabeceraFacturaAguardar.nombre_factura=facturaCabeceraObtenidaFormulario.nombre_factura;
    this.cabeceraFacturaAguardar.cedula_factura=facturaCabeceraObtenidaFormulario.cedula_factura;
    this.cabeceraFacturaAguardar.telefono_factura=facturaCabeceraObtenidaFormulario.telefono_factura;
    this.cabeceraFacturaAguardar.direccion_factura=facturaCabeceraObtenidaFormulario.direccion_factura;
    this.cabeceraFacturaAguardar.correo_factura=facturaCabeceraObtenidaFormulario.correo_factura;
    this.cabeceraFacturaAguardar.fecha_factura=facturaCabeceraObtenidaFormulario.fecha_factura;
    this.cabeceraFacturaAguardar.total_factura=facturaCabeceraObtenidaFormulario.total_factura+"";
    this.cabeceraFacturaAguardar.tipo_pago_factura=facturaCabeceraObtenidaFormulario.tipo_pago_factura;
    this.cabeceraFacturaAguardar.estado_factura=facturaCabeceraObtenidaFormulario.estado_factura;

    //console.log(this._authService.usuarioLogueado.id);
    this._facturaServicio.createfacturaCabecera(this.cabeceraFacturaAguardar).subscribe(
      (fc: Facturacabecera) => {
        //console.log(usuarioActualizado);
        //alert("Cabecera creada");
        this.cerrarFormulario();
        this.facturasInicialmenteObtenidas.push(fc);
      },
      (error) => { console.error('Error', error); }
    );

  }

}
