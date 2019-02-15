import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import { Evento } from 'src/app/interfaces/Evento';
import { Medicamento } from 'src/app/interfaces/Medicamento';
import { Eventomedicamento } from 'src/app/interfaces/Eventomedicamento';
import { EventoMedicamentoAGUARDAR } from 'src/app/interfaces/EventoMedicamentoAGUARDAR';
import { Facturadetalle } from 'src/app/interfaces/Facturadetalle';
import { FacturadetalleAGUARDAR } from 'src/app/interfaces/FacturadetalleAGUARDAR';
import { FacturaService } from 'src/app/servicios/factura.service';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';


@Component({
  selector: 'app-anadir-item',
  templateUrl: './anadir-item.component.html',
  styleUrls: ['./anadir-item.component.css']
})
export class AnadirItemComponent implements OnInit {
  eventoObtenido: Evento = {};
  eventoMedicamento: Eventomedicamento[] = [];
  medicamentos: Medicamento[];
  medicamentosamostrar:Medicamento[]=[];
  eventoMedicamentoSeleccionado:Eventomedicamento={};
  facturadetalle:FacturadetalleAGUARDAR={};
  nombreItem:string;
  facturaCabereraObtenida:Facturacabecera;
  constructor(private readonly _eventoServicio: EventoService,
    private readonly _route: ActivatedRoute, private readonly _routeN: Router,    private readonly _facturaService:FacturaService) { }

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
                this.eventoMedicamento = evento.eventomedicamentofk;
                //this.ideventoActual=evento.id;
              },
              (error) => {
                console.error('Error', error);
              });

              
        }
      );

      rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {

          // parametros ->  {idUsuario:"1"}
          const eventoEncontrado = this._facturaService
            .findOneCabeceraById(+parametros.idFactura).subscribe(

              (fcObtenida: Facturacabecera) => {

                this.facturaCabereraObtenida = fcObtenida;
                
                
              },
              (error) => {
                console.error('Error', error);
              });

              
        }
      );
      
      this.obtenerMedicamentos();
      
  }
  
  obtenerMedicamentos() {
    this._eventoServicio.findAllMedicamentos().subscribe(
      (medicamentosencontrados: Medicamento[]) => {
        console.log("medicamentos"+medicamentosencontrados);
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
        const idevento: string = eventomedicamento.medicamentofk + ""
        
        medicamentosencontrados.forEach(
          (medicamento) => {
            if (medicamento.id == idevento) {
              
              this.medicamentosamostrar.push(medicamento);
            }

          });
      }
    );
    
  }


  hijoSeleccionadoComboBox(){
    const idMedicamento = (<HTMLInputElement>document.getElementById("selectMedicamentoEnevento")).value;
   // console.log(idMedicamento);
    const idevento:number=this.eventoObtenido.id;
    this.medicamentos.forEach(
      (med)=>{
       
        if(med.id.valueOf()==idMedicamento.valueOf()){
         this.nombreItem=med.nombre_medicamento;
          med.eventomedicamentofk.forEach(
            (evenMed)=>{
              
              if(evenMed.eventofk===idevento){
                this.eventoMedicamentoSeleccionado=evenMed;

              }
              
            }
          );
        }
      })
  }
  anadirItem(){
    this.facturadetalle.item=this.nombreItem;
    this.facturadetalle.precio=this.eventoMedicamentoSeleccionado.precio_base;
    this.facturadetalle.eventomedicamentofk=this.eventoMedicamentoSeleccionado.id;
    this.facturadetalle.facturacabecerafk=this.facturaCabereraObtenida.id;
    this._facturaService.createfacturaDetalle(this.facturadetalle).subscribe(
      (fac:Facturadetalle)=>{
        console.log(fac);
        alert("Agregado a la factura");
        
        this._routeN.navigate(["/home","eventos"]);

      }
      ,
      (error) => {
        console.error('Error', error);
      }
    );
    
    
  }


}
