import { Eventomedicamento } from './Eventomedicamento';

export interface MedicamentoAGUARDAR {
      id?:string;
      nombre_medicamento?: string;
      gramos_ingerir?: string;
      composicion?: string;
      usado_para?: string;
      fecha_caducidad?: string;
      numero_pastillas?: string;
      pacientefk?: string;
      eventomedicamentofk?: Eventomedicamento[];
      createdAt?:number;
      updatedAt?:number;
}