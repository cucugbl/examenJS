import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly _httpClient: HttpClient) { }


  logueo(username: string, password: string): Observable<Usuario> {

    const url = 'http://localhost:1337/Usuario/login';

    return this._httpClient.post(url, {correo: username, password: password}).pipe(map(r => <Usuario>r));

  }

}
