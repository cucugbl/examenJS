import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/Medicamento';

@Component({
  selector: 'app-formulario-hijo-padre',
  templateUrl: './formulario-hijo-padre.component.html',
  styleUrls: ['./formulario-hijo-padre.component.css']
})
export class FormularioHijoPadreComponent implements OnInit {
  @Input()
  medicamento:Medicamento;


  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();

  medicamentoObtenido:Medicamento;
  
  constructor() { 
    
  }

  ngOnInit() {
    this.medicamentoObtenido=this.medicamento;
  }
  emitirFormularioValido(){
    
    // console.log(this.usuario.fecha_nacimiento_usuario);
      this.formularioValido.emit(this.medicamento);
   }
}
