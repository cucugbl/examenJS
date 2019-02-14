import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/interfaces/Rol';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  usuarioAactualizar: Usuario;
  rolesUsuario: Rol[];
  rolesTotales: Rol[];
  rolaagreagar: Rol;
  bool: boolean;
  constructor(
    private readonly _usuarioServicio: UsuarioService,
    private readonly _route: ActivatedRoute, ) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {

          // parametros ->  {idUsuario:"1"}
          const usuarioEncontrado = this._usuarioServicio
            .findOneById(+parametros.idUsuario).subscribe(

              (usuarioObtenido: Usuario) => {
                //console.log('Se obtubo:', usuarioObtenido);
                this.usuarioAactualizar = usuarioObtenido;
                this.rolesUsuario = usuarioObtenido.rolfk;
                this.usuarioAactualizar.nombre_usuario;
                this.usuarioAactualizar.correo_usuario;
                this.usuarioAactualizar.password_usuario;
                this.usuarioAactualizar.fecha_nacimiento_usuario;
                //console.log('Se obtubo:', this.usuarioAactualizar.correo_usuario);

              },
              (error) => {
                console.error('Error', error);
              });
        }
      );
    this.obtenerRoles();
  }


  actualizarUsuario(usuarioRecibido: Usuario) {
    this._usuarioServicio.updateOneById(usuarioRecibido).subscribe(
      (usuarioActualizado: Usuario) => {
        //console.log(usuarioActualizado);
        alert("usuario actualizado");
      },
      (error) => { console.error('Error', error); }
    );
  }

  eliminarRol(rol: Rol) {
    const id: string = this.usuarioAactualizar.id;

    this._usuarioServicio.deleteRolById(id, rol.id).subscribe(
      (resp: string) => {
        //console.log(resp);

        const indice = this.rolesUsuario
          .findIndex((u) => u.id === rol.id);
        this.rolesUsuario.splice(indice, 1);

      },
      (error) => { console.error('Error', error); }
    );

  }
  obtenerRoles() {
    this._usuarioServicio.findAllRoles().subscribe(
      (roles: Rol[]) => {
        //console.log(roles);
        this.rolesTotales = roles;
      },
      (error) => { console.error('Error', error); }

    )
  }

  agregarRol() {

    const idRol = (<HTMLInputElement>document.getElementById("selectRol")).value;
    const idrolnum: number = +idRol;
    const id: string = this.usuarioAactualizar.id;

    if (this.rolesUsuario.some((u) => u.id.valueOf() == idRol.valueOf())) {
      this.bool = true;
      setTimeout(()=>{this.bool=false},700);
      //      alert (" usuario ya tiene ese rol");
    } else {
      //console.log(id,idrolnum);
      this._usuarioServicio.addRol(id, idrolnum + "").subscribe(
        (resp: string) => {

          const indice = this.rolesTotales
            .findIndex((u: Rol) => u.id.valueOf() == idRol.valueOf());
          //console.log(indice);
          this.rolaagreagar = this.rolesTotales[indice];
          // console.log(this.rolaagreagar.nombre_rol);
          this.rolesUsuario.push(this.rolaagreagar);
        },
        (error) => { console.error('Error', error); }
      );
    }
    
  }
}
