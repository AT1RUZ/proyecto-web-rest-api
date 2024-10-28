import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
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
