import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura.service';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';

@Component({
  selector: 'app-lista-de-facturas',
  templateUrl: './lista-de-facturas.component.html',
  styleUrls: ['./lista-de-facturas.component.css']
})
export class ListaDeFacturasComponent implements OnInit {

  facturasInicialmenteObtenidas:Facturacabecera[]=[];
  constructor(private readonly _facturaServicio:FacturaService) { }

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

}
