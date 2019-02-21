import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse-r',
  templateUrl: './registrarse-r.component.html',
  styleUrls: ['./registrarse-r.component.css']
})
export class RegistrarseRComponent implements OnInit {
  nombreReg: string;
  correoReg: string;
  passReg: string;
  fecha_nacimientoReg: string;
  usuarioAcrear: Usuario = {};
  constructor(
    private _router: Router,
    private _userService: UsuarioService

  ) { }

  ngOnInit() {
  }
  
  registrarUsuario(usuarioRecibido: Usuario) {
    this._userService.registrarUsuario(usuarioRecibido).subscribe(
      (usuario: Usuario) => {
        this._userService.addRol(usuario.id,"2").subscribe(
          (resp)=>{
            alert('usuario registrado y ' +resp)
            this._router.navigate(['/login']);
          }
        );
        
        //alert(`usuario creado: Hola ${usuario.nombre}`)
      }, (error) => { console.log("Error:", error); }
    );
  }


  irLoginCancel() {
    this._router.navigate(['/login']);
  }
}
