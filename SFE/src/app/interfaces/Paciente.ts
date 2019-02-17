import { Usuario } from './usuario';
import { Medicamento } from './Medicamento';

export class Paciente{
    
    usuariofk?: Usuario|string;
    medicamentofk?: Medicamento[];
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombre_paciente?: string;
    apellido_paciente?:string;
    fecha_naciemiento_paciente?:string;
    hijos_paciente?: string;
    seguro_paciente?: string;
}