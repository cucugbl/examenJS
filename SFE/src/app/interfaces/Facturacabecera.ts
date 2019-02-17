import { Facturadetalle } from './Facturadetalle';
import { Evento } from './Evento';
import { Usuario } from './usuario';

export interface Facturacabecera {
        id?: string;
        nombre_factura?: string;
        cedula_factura?: string;
        telefono_factura?: string;
        direccion_factura?: string;
        correo_factura?: string;
        fecha_factura?: string;
        total_factura?: string;
        tipo_pago_factura?: string;
        estado_factura?: string;
        facturadetallefk?: Facturadetalle[];
        eventofk?: Evento;
        //Relacion con la tabla evento
        usuariofk?: Usuario|string;



}