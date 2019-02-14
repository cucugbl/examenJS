import { Facturadetalle } from './Facturadetalle';
import { Medicamento } from './Medicamento';
import { Evento } from './Evento';

export interface Eventomedicamento {
    precio_base: string;
    id?:string;
    createdAt?:number;
    updatedAt?:number;
    eventofk: Evento[];
    medicamentofk: Medicamento[];
    facturadetallefk: Facturadetalle[];

}

