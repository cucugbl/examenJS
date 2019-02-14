import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/Evento';
import { Medicamento } from '../interfaces/Medicamento';
@Injectable({
  providedIn: 'root'
})
export class EventoService {
  nombreModelo = '/Evento';
  nombreModeloMedicamento = '/Medicamento';
  sailsurl='http://localhost:1337';
  constructor(private readonly _httpClient: HttpClient) { }

 findAll(): Observable<Evento[]> {
    // OBSERVABLE
    const eventos$ = this._httpClient
      .get(this.sailsurl + this.nombreModelo)
      .pipe(map(r => <Evento[]>r)); // Castear

    return eventos$;
  }
  findOneById(id: number | string): Observable<Evento> {
    const url = this.sailsurl + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(e => <Evento>e)); // Castear
  }

  findAllMedicamentos(): Observable<Medicamento[]> {
    // OBSERVABLE
    const medicamentos$ = this._httpClient
      .get(this.sailsurl + this.nombreModeloMedicamento)
      .pipe(map(m => <Medicamento[]>m)); // Castear

    return medicamentos$;
  }
}
