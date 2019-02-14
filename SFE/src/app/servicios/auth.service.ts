import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Rol } from 'src/app/interfaces/Rol';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioLogueado: Usuario;
  rolLogueado: Rol[];

  constructor(private readonly _httpClient: HttpClient) { }


  logueo(usernamer: string, passwordr: string): Observable<Usuario> {

    const url = 'http://localhost:1337/Usuario/login';

    const usuario$ = this._httpClient.post(url, { correo: usernamer, password: passwordr })
      .pipe(map(r => <Usuario>r));

    usuario$.subscribe(
      (usuario: Usuario) => {

        this.usuarioLogueado = usuario;
        this.rolLogueado = usuario.rolfk;
        //console.log();
      },
      (error) => {
        console.error(error);
      }
    );

    return usuario$
  }

}
