import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("Transporte")//aki se tiene que poner igual que en la tabla de la base de datos
export class Transporte {
  @PrimaryColumn({ type: 'varchar' })
  ID_Transporte: string;

  @Column({ type: 'varchar' })
  Vehículo: string;

  @Column({ type: 'varchar' })
  Modalidad: string;

  @Column({ type: 'double precision' })
  Precio: number;
}
