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
  constructor(
    private _router: Router,
    private _userService: UsuarioService

  ) { }

  ngOnInit() {
  }
  irLogin() {

    var usuario: Usuario = {

      nombre_usuario: this.nombreReg,
      correo_usuario: this.correoReg,
      password_usuario: this.passReg,
      fecha_nacimiento_usuario: this.fecha_nacimientoReg,
      // rol: 2


    }
    

    this._userService.registrarUsuario(usuario).subscribe(
      (usuario: Usuario) => {
        const url = [''];
        this._router.navigate(url);
        alert('usuario registrado')
        //alert(`usuario creado: Hola ${usuario.nombre}`)
      }, (error) => { console.log("Error:", error); }
    );
    // this._userService.agregarUsuario(usuario);

     this._router.navigate(['/login']);
  }

  irLoginCancel() {
    this._router.navigate(['/login']);
  }
}
