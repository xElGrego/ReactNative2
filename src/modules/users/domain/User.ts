export interface User {
    idUser?: Guid;
    nombre: string;
    edad: number;
    apellido: string;
    fechaNacimiento?: Date;
}