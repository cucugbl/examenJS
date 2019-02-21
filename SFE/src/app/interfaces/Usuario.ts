import { Rol } from 'src/app/interfaces/Rol';

import { Paciente } from 'src/app/interfaces/Paciente';
import { Facturacabecera } from 'src/app/interfaces/Facturacabecera';

export interface Usuario {
  nombre_usuario?: string;
  correo_usuario?: string;
  password_usuario?: string;
  fecha_nacimiento_usuario?: string;
  createdAt?: string;
  updatedAt?: string;
  id?:string;
  rolfk?:Rol[];
  pacientefk?:Paciente[];
  facturacabecerafk?:Facturacabecera[];

}