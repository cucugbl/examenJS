import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import { Evento } from 'src/app/interfaces/Evento';
import { Medicamento } from 'src/app/interfaces/Medicamento';
import { Eventomedicamento } from 'src/app/interfaces/Eventomedicamento';
import { EventoMedicamentoAGUARDAR } from 'src/app/interfaces/EventoMedicamentoAGUARDAR';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Paciente } from 'src/app/interfaces/Paciente';
import { Usuario } from 'src/app/interfaces/usuario';
import { PacientesMedicamentosService } from 'src/app/servicios/pacientes-medicamentos.service';
@Component({
  selector: 'app-anadir-medicamentos',
  templateUrl: './anadir-medicamentos.component.html',
  styleUrls: ['./anadir-medicamentos.component.css']
})
export class AnadirMedicamentosComponent implements OnInit {
  //------------google map
  title: string = 'Mapa con google maps';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 16;
  //------------
  eventoObtenido: Evento = {};
  medicamentos: Medicamento[];
  eventoMedicamento: Eventomedicamento[] = [];
  medicamentosamostrar: Medicamento[] = [];
  eventoMedicamentoAAgregar: EventoMedicamentoAGUARDAR = {};
  ideventoActual: number;
  bool: boolean;
  mednuevo: Medicamento;
  pacientesTotales: Paciente[] = [];
  seleccionMedicamentosPorUsuarioLogueado: Medicamento[] = [];
  eventosMedicamentosTotales: Eventomedicamento[] = [];
  medicamentoAeliminarAux: Medicamento = {};
  medicamentosTotalesAux: Medicamento[];
  constructor(private readonly _eventoServicio: EventoService,
    private readonly _route: ActivatedRoute, private readonly _authService: AuthService,
    private readonly _routerN: Router,
    private readonly _pacientemedicamentoService: PacientesMedicamentosService) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {

          // parametros ->  {idUsuario:"1"}
          const eventoEncontrado = this._eventoServicio
            .findOneById(+parametros.idEvento).subscribe(

              (evento: Evento) => {

                this.eventoObtenido = evento;
                this.lat = +evento.latitud_evento;
                this.lng = +evento.longitud_evento;
                this.eventoMedicamento = evento.eventomedicamentofk;
                this.ideventoActual = evento.id;
              },
              (error) => {
                console.error('Error', error);
              });


        }
      );
    this.obtenerEventosMedicamentosTotales();
    this.obtenerPacientesTotales();
    this.obtenerMedicamentos();


  }
  obtenerPacientesTotales() {
    this._pacientemedicamentoService.findAllPacientes().subscribe(
      (pt: Paciente[]) => {
        this.pacientesTotales = pt;
      },
      (error) => {
        console.error('Error', error);
      });
  }

  obtenerMedicamentos() {
    this._eventoServicio.findAllMedicamentos().subscribe(
      (medicamentosencontrados: Medicamento[]) => {
        //console.log(medicamentosencontrados);
        this.medicamentosTotalesAux = medicamentosencontrados;
        this.medicamentos = medicamentosencontrados;

        this.seleccionarMedicamentos(medicamentosencontrados);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  seleccionarMedicamentos(medicamentosencontrados: Medicamento[]) {
    this.eventoMedicamento.forEach(
      (eventomedicamento: Eventomedicamento) => {
        const evento: string = eventomedicamento.medicamentofk + ""

        medicamentosencontrados.forEach(
          (medicamento) => {
            if (medicamento.id == evento) {

              this.medicamentosamostrar.push(medicamento);
            }

          });
      }
    );

    this.SeleccionarMedicamentosPorUsuarioLogueado()
  }




  SeleccionarMedicamentosPorUsuarioLogueado() {
    this.medicamentos.forEach((m) => {
      //console.log(m)
      this.pacientesTotales.forEach((p) => {
        //console.log(p);
        if ((p.usuariofk[0].id == +this._authService.usuarioLogueado.id)) {
          if (!this.seleccionMedicamentosPorUsuarioLogueado.some(sm => sm.id == m.id)) {
            this.seleccionMedicamentosPorUsuarioLogueado.push(m);
            this.medicamentos = this.seleccionMedicamentosPorUsuarioLogueado;
          }
        }
      });
    }
    );
    // console.log(this.seleccionMedicamentosPorUsuarioLogueado);

  }



  eliminarMedicamento(m: Medicamento) {
    this.medicamentoAeliminarAux = m;
    // const id: string = this.usuarioAactualizar.id;
    this.pacientesTotales.forEach((p) => {
      if (this.medicamentoAeliminarAux.pacientefk[0].id == undefined) {

      } else {

        if (this.medicamentoAeliminarAux.pacientefk[0].id == p.id) {

          if ((p.usuariofk[0].id == +this._authService.usuarioLogueado.id)) {


            this._eventoServicio.deleteByIdEventoMedicamento(this.obtenerIDeventoMedicamentoAborrar(m).id).subscribe(
              (ev: Eventomedicamento) => {
                alert("relacion evento medicamento borrada");
                const indice = this.medicamentosamostrar
                  .findIndex((u) => u.id === m.id);
                this.medicamentosamostrar.splice(indice, 1);
              },
              (error) => {
                console.error('Error', error);
                alert("no se pudo eliminar la relacion evento medicamento");
              }
            )

          } else {
            console.log("Este usuario no puede eliminar este medicamento");
          }
        }
      }
    });


  }

  obtenerIDeventoMedicamentoAborrar(m: Medicamento): Eventomedicamento {
    let evRes: Eventomedicamento;
    this.eventosMedicamentosTotales.forEach(ev => {

      if (ev.medicamentofk != null && ev.eventofk.id != null) {

        if (ev.eventofk.id == this.ideventoActual && ev.medicamentofk.id == m.id) {
          evRes = ev;
        }
      }

    })
    return evRes;
  }

  obtenerEventosMedicamentosTotales() {
    this._eventoServicio.findAllEventosMedicamentos().subscribe(
      (emt: Eventomedicamento[]) => {
        this.eventosMedicamentosTotales = emt;
      },
      (error) => { console.error('Error', error); }
    );
  }

  agregarHijoaEvento() {
    const idMedicamento = (<HTMLInputElement>document.getElementById("selectMateria")).value;
    this.eventoMedicamentoAAgregar.eventofk = this.eventoObtenido.id + "";
    this.eventoMedicamentoAAgregar.medicamentofk = idMedicamento;
    //this.eventoMedicamentoAAgregar.medicamentofk.push(this.medicamentos.find(m=>m.id.valueOf()==idMedicamento.valueOf()));
    //this.eventoMedicamentoAAgregar.eventofk.push(this.eventoObtenido);

    if (this.medicamentosamostrar.some((m) => m.id.valueOf() == idMedicamento.valueOf())) {
      this.bool = true;
      setTimeout(() => { this.bool = false }, 750);
      //      alert (" usuario ya tiene ese rol");
    }
    else {
      //console.log(this.eventoMedicamentoAAgregar);
      this._eventoServicio.crearEventoMedicamento(this.eventoMedicamentoAAgregar).subscribe(
        (em: Eventomedicamento) => {
          //console.log(em);

          this.mednuevo = this.medicamentosTotalesAux.find((mt) => mt.id == em.medicamentofk.id);
          //window.location.reload();
          this.mednuevo.eventomedicamentofk.push(em);

          this.medicamentosamostrar.push(this.mednuevo);

          this._routerN.navigate(['/home']);
          alert("se agrego la relacion evento medicamento");
          this._routerN.navigate(['/home','anadir-medicamentos',this.ideventoActual]);
          //console.log(this.medicamentosamostrar)

          //window.location.reload(); 

        },
        (error) => { console.error('Error', error); }
      );
    }
  }

}