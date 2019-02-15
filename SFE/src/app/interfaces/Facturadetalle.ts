import { Eventomedicamento } from './Eventomedicamento';
import { Facturacabecera } from './Facturacabecera';

export class Facturadetalle {
    item?:string;
    cantidad?: string;
    precio?: string;
    total?: string;
    eventomedicamentofk?: Eventomedicamento;
    facturacabecerafk?: Facturacabecera;

}