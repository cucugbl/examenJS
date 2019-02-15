import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';


@Component({
  selector: 'app-formulario-padre-hijo',
  templateUrl: './formulario-padre-hijo.component.html',
  styleUrls: ['./formulario-padre-hijo.component.css']
})
export class FormularioPadreHijoComponent implements OnInit {
  @Input()
  paciente:Paciente;


  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();
  
  pacienteObtenido:Paciente;

  constructor() { }

  ngOnInit() {
    this.pacienteObtenido=this.paciente;
  }
  emitirFormularioValido(){
    
    // console.log(this.usuario.fecha_nacimiento_usuario);
      this.formularioValido.emit(this.paciente);
   }
}
