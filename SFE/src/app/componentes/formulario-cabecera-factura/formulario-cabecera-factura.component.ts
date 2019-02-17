import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';



@Component({
  selector: 'app-formulario-cabecera-factura',
  templateUrl: './formulario-cabecera-factura.component.html',
  styleUrls: ['./formulario-cabecera-factura.component.css']
})
export class FormularioCabeceraFacturaComponent implements OnInit {

  @Input()
  cabeceraFacturaEnviada:Facturacabecera;


  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();
  
  facturaCabeceraObtenida:Facturacabecera;


  constructor() { }

  ngOnInit() {
    this.facturaCabeceraObtenida=this.cabeceraFacturaEnviada;
  }
  emitirFormularioValido(){
    
    // console.log(this.usuario.fecha_nacimiento_usuario);
      this.formularioValido.emit(this.facturaCabeceraObtenida);
   }
}
