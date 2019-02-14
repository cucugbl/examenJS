import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  @Input()
  usuario: Usuario;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();
  


  constructor() { }


  ngOnInit() {
  }

  emitirFormularioValido(){
    
   // console.log(this.usuario.fecha_nacimiento_usuario);
     this.formularioValido.emit(this.usuario);
  }

}
