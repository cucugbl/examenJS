import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  
    private _router: Router,
   
    ) { }

  ngOnInit() {
  }
  irRegistro(){
    this._router.navigate(['/registrarse']);
  }

  irHome(){

    // this._loginService.logueo(this.mailUser, this.passUser).subscribe(
    //   results => {
    //     this.usuarioLogin  = results;
    //     if(this.usuarioLogin  == ''){
    //       this.MensajeSalida = 'Credenciales incorrectas'
    //     }else{
    //       if(this.usuarioLogin.correo_usuario === this.mailUser && this.usuarioLogin.password_usuario === this.passUser) {
    //         var valor = this.usuarioLogin.rolfk.map(rol => rol.nombre_rol)
    //         for (let key in valor) {
    //           if (valor[key] === 'usuario') {
    //             VariablesGlobales.isUser = true;
    //           } else {
    //             VariablesGlobales.isAdministrator = true;
    //           }
    //         }
    //         VariablesGlobales.idUser = this.usuarioLogin.id;
    //         console.log(VariablesGlobales.idUser)
    //         this._router.navigate(['/home']);
    //       }
    //     }
    //   }
    // )
  }

}
