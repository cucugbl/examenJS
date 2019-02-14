import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Rol } from 'src/app/interfaces/Rol';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  MensajeSalida
  
  mailUser;
  passUser;
  roles: any[] = [];

  usuarioLogueado:Usuario;
  rolLogueado:Rol;

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) { }

  ngOnInit() {
  }
  irRegistro() {
    this._router.navigate(['/registrarse']);
  }

  irHome() {
    const respuestaLogin$ = this._authService.logueo(this.mailUser, this.passUser);
    respuestaLogin$.subscribe(
      (usuario: Usuario) => {
       // console.log(usuario);
        this._router.navigate(['/home']);
       // this.usuarioLogueado=usuario;
      },
      (error) => {
       // console.error(error);
        alert('usuario y contrasena no coinciden')
        this._router.navigate(['/login']);
      }
    );

  }

}
