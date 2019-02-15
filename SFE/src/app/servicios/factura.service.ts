import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Facturadetalle } from '../interfaces/Facturadetalle';
import { Facturacabecera } from '../interfaces/Facturacabecera';
import { FacturadetalleAGUARDAR } from '../interfaces/FacturadetalleAGUARDAR';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  nombreModeloFD = '/Facturadetalle';
  nombreModeloFC = '/FacturaCabecera';
  sailsurl='http://localhost:1337';
  constructor(private readonly _httpClient: HttpClient) { }
  
  findAllDetallesFactura(): Observable<Facturadetalle[]> {
    // OBSERVABLE
    const eventos$ = this._httpClient
      .get(this.sailsurl + this.nombreModeloFD)
      .pipe(map(r => <Facturadetalle[]>r)); // Castear

    return eventos$;
  }

  findAllCabeceraFactura(): Observable<Facturacabecera[]> {
    // OBSERVABLE
    const eventos$ = this._httpClient
      .get(this.sailsurl + this.nombreModeloFC)
      .pipe(map(r => <Facturacabecera[]>r)); // Castear

    return eventos$;
  }
  findOneCabeceraById(id: number | string): Observable<Facturacabecera> {
    const url = this.sailsurl + this.nombreModeloFC
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(e => <Facturacabecera>e)); // Castear
  }

  createfacturaDetalle(facturadetalle:FacturadetalleAGUARDAR):Observable<Facturadetalle>{
    return this._httpClient.post(this.sailsurl+this.nombreModeloFD,facturadetalle).pipe(map(r => <Facturadetalle>r)); 

  }


}
