import { Component,EventEmitter, Input,OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/Medicamento';

@Component({
  selector: 'app-medicamentos-formulario',
  templateUrl: './medicamentos-formulario.component.html',
  styleUrls: ['./medicamentos-formulario.component.css']
})
export class MedicamentosFormularioComponent implements OnInit {
  @Input()
  medicamento:Medicamento ;

  constructor() { }


  ngOnInit() {
  }

}
