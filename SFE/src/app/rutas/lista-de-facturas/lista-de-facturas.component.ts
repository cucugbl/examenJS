import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura.service';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-lista-de-facturas',
  templateUrl: './lista-de-facturas.component.html',
  styleUrls: ['./lista-de-facturas.component.css']
})
export class ListaDeFacturasComponent implements OnInit {
  mostrarFormulario:boolean=false;
  facturasInicialmenteObtenidas: Facturacabecera[] = [];
  cabeceraFacturaEnviada: Facturacabecera = {};
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
    facturaCabeceraObtenidaFormulario.usuariofk = this._authServicio.usuarioLogueado.id;
    //console.log(this._authService.usuarioLogueado.id);
    this._facturaServicio.createfacturaCabecera(facturaCabeceraObtenidaFormulario).subscribe(
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
