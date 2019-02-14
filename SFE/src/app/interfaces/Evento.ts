import { Eventomedicamento } from './Eventomedicamento';
import { Facturacabecera } from './Facturacabecera';

export interface Evento {
    eventomedicamentofk: Eventomedicamento[];
    facturacabecerafk:  Facturacabecera[];
    createdAt: number;
    updatedAt: number;
    id: number;
    nombre_evento:string;
    fecha_evento: string;
    latitud_evento: string;
    longitud_evento: string
}