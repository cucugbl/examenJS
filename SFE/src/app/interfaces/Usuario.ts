import { Rol } from 'src/app/interfaces/Rol';

export interface Usuario {
  nombre_usuario?: string;
  correo_usuario?: string;
  password_usuario?: string;
  fecha_nacimiento_usuario?: string;
  createdAt?: string;
  updatedAt?: string;
  id?:string;
  rolfk?:Rol[];
}