import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/Evento';
import { Medicamento } from '../interfaces/Medicamento';
import { Eventomedicamento } from '../interfaces/Eventomedicamento';
import { EventoMedicamentoAGUARDAR } from '../interfaces/EventoMedicamentoAGUARDAR';
@Injectable({
  providedIn: 'root'
})
export class EventoService {
  nombreModelo = '/Evento';
  nombreModeloMedicamento = '/Medicamento';
  nombremodeloEventoMedicamento = '/EventoMedicamento';
  sailsurl = 'http://localhost:1337';
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
  deleteByIdMedicamento(id: number | string): Observable<Medicamento> {
    const medicamento$ = this._httpClient
      .delete(this.sailsurl + this.nombreModeloMedicamento + '/' + id)
      .pipe(map(m => <Medicamento>m)); // Castear

    return medicamento$
  }


  crearEventoMedicamento(em: EventoMedicamentoAGUARDAR): Observable<Eventomedicamento> {

    return this._httpClient.post(this.sailsurl + this.nombremodeloEventoMedicamento, em)
      .pipe(
        map(
          respuesta => <Eventomedicamento>respuesta
        )
      );
  }
}
