import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  nombreModelo = '/Usuario';
  constructor(private readonly _httpClient: HttpClient) { }
  
  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    const usuarioAguardar: Usuario = usuario;

    return this._httpClient.post("http://localhost:1337" + this.nombreModelo, usuarioAguardar)
      .pipe(
        map(
          respuesta => <Usuario>respuesta
        )
      );
  }

}
