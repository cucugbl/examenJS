import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/Paciente';
import { Medicamento } from '../interfaces/Medicamento';
import { MedicamentoAGUARDAR } from '../interfaces/MedicamentoAGUARDAR';
import { PacienteAGUARDAR } from '../interfaces/PacienteAGUARDAR';

@Injectable({
  providedIn: 'root'
})
export class PacientesMedicamentosService {
  nombreModeloPaciente = '/Paciente';
  nombreModeloMedicamento = '/Medicamento';
  sailsurl = 'http://localhost:1337';
  constructor(private readonly _httpClient: HttpClient) { }

  findAllPacientes(): Observable<Paciente[]> {
    // OBSERVABLE
    const pacientes$ = this._httpClient
      .get(this.sailsurl + this.nombreModeloPaciente)
      .pipe(map(r => <Paciente[]>r)); // Castear

    return pacientes$;
  }

  findOneById(id: number | string): Observable<Paciente> {
    const url = this.sailsurl + this.nombreModeloPaciente
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(e => <Paciente>e)); // Castear
  }

  findOneByIdMedicamento(id: number | string): Observable<Medicamento> {
    const url = "http://localhost:1337/Medicamento" + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(m => <Medicamento>m)); // Castear
  }

  crearPaciente(paciente: PacienteAGUARDAR): Observable<Paciente> {
    

    return this._httpClient.post(this.sailsurl + this.nombreModeloPaciente, paciente)
      .pipe(
        map(
          respuesta => <Paciente>respuesta
        )
      );
  }

  updateOnePacienteById(paciente: Paciente) {

    const url = this.sailsurl + this.nombreModeloPaciente
      + '/' + paciente.id;

    return this._httpClient
      .put(url, paciente)
      .pipe(map(u => <Paciente>u)); // Castear

  }

  updateOneMedicamentoById(medicamento: Medicamento) {

    const url = this.sailsurl + this.nombreModeloMedicamento
      + '/' + medicamento.id;

    return this._httpClient
      .put(url, medicamento)
      .pipe(map(u => <Medicamento>u)); // Castear

  }

  deletePaciente(id: number): Observable<Paciente> {
    return this._httpClient
      .delete(this.sailsurl + this.nombreModeloPaciente + `/${id}`)
      .pipe(map(r => <Paciente>r)); // Castear
  }

  crearMedicamentoPaciente(medicamento: MedicamentoAGUARDAR): Observable<Medicamento> {
    return this._httpClient.post(this.sailsurl + this.nombreModeloMedicamento, medicamento)
      .pipe(
        map(
          respuesta => <Medicamento>respuesta
        )
      );
  }
  deleteMedicamentoPaciente(id: number): Observable<Medicamento> {
    return this._httpClient
      .delete(this.sailsurl + this.nombreModeloMedicamento + `/${id}`)
      .pipe(map(r => <Medicamento>r)); // Castear
  }



  addRelacionPacienteMedicamento(idPaciente: string, idMedicamento: string) {
    const ids = { id_paciente: idPaciente, id_medicamento: +idMedicamento }
    // console.log(ids);
    const url = this.sailsurl + this.nombreModeloPaciente + "/agregarMedicamentos";
    return this._httpClient.post(url, ids).pipe(
      map(
        respuesta => <string>respuesta
      )
    );
  }
}
