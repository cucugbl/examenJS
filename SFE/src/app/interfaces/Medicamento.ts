import { Eventomedicamento } from './Eventomedicamento';
import { Paciente } from './Paciente';
export interface Medicamento {
      id?:string;
      nombre_medicamento: string;
      gramos_ingerir?: string;
      composicion?: string;
      usado_para?: string;
      fecha_caducidad?: string;
      numero_pastillas?: string;
      pacientefk?: Paciente[];
      eventomedicamentofk?: Eventomedicamento[];
}