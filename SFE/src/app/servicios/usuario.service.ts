import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Rol } from '../interfaces/Rol';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  nombreModelo = '/Usuario';
  nombreModeloRol = '/Rol';
  sailsurl='http://localhost:1337';
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
  

  findAll(): Observable<Usuario[]> {
    // OBSERVABLE
    const usuarios$ = this._httpClient
      .get("http://localhost:1337" + this.nombreModelo)
      .pipe(map(r => <Usuario[]>r)); // Castear

    return usuarios$;
  }

  findAllRoles(): Observable<Rol[]> {
    // OBSERVABLE
    const roles$ = this._httpClient
      .get( this.sailsurl + this.nombreModeloRol)
      .pipe(map(r => <Rol[]>r)); // Castear

    return roles$;
  }

  
  delete(id: number): Observable<Usuario> {
    return this._httpClient
      .delete("http://localhost:1337" + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Usuario>r)); // Castear
  }


  findOneById(id: number | string): Observable<Usuario> {
    const url = "http://localhost:1337" + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(u => <Usuario>u)); // Castear
  }

  updateOneById(usuario: Usuario) {

    const url = "http://localhost:1337" + this.nombreModelo
      + '/' + usuario.id;

    return this._httpClient
      .put(url, usuario)
      .pipe(map(u => <Usuario>u)); // Castear

  }
  deleteRolById(idUsuario: string, idRol: string) {
    const ids = { id_usuario: idUsuario, id_rol: idRol }
    const url = "http://localhost:1337" + this.nombreModelo + "/eliminarRol";
    return this._httpClient.post(url, ids).pipe(
      map(
        respuesta => <string>respuesta
      )
    );
  }
  addRol(idUsuario: string, idRol: string) {
    const ids = { id_usuario: idUsuario, id_rol: +idRol }
   // console.log(ids);
    const url = "http://localhost:1337" + this.nombreModelo + "/agregarRol";
    return this._httpClient.post(url, ids).pipe(
      map(
        respuesta => <string>respuesta
      )
    );
  }
  

}
