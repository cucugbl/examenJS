import { Eventomedicamento } from './Eventomedicamento';
import { Facturacabecera } from './Facturacabecera';

export class Facturadetalle {
    id?:string;
    item?:string;
    cantidad?: number;
    precio?: number;
    total?: number;
    eventomedicamentofk?: Eventomedicamento;
    facturacabecerafk?: Facturacabecera;

}