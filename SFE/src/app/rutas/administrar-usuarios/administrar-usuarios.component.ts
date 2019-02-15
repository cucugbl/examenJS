import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.component.html',
  styleUrls: ['./administrar-usuarios.component.css']
})
export class AdministrarUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private readonly _usuarioServicio: UsuarioService) {

  }

  ngOnInit() {
    this._usuarioServicio.findAll().subscribe(
      (usuariosR: Usuario[]) => {
        this.usuarios = usuariosR;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  eliminar(usurioE: Usuario) {

    this._usuarioServicio.delete(+usurioE.id).subscribe(

      (usuarioEliminado: Usuario) => {
      //  console.log('Se elimino:', usuarioEliminado);

        //eliminando del arreglo
        const indice = this.usuarios
        .findIndex((u) => u.id === usurioE.id);
        this.usuarios.splice(indice, 1);
      },
      (error) => {
        console.error('Error', error);
      }
    );

  }


}
