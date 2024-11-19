import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Contratado } from '../../contratado/entities/contratado.entity';

@Entity('Contratos')
export class Contrato {
  @PrimaryColumn()
  Código_Contrato: string;

  @Column()
  Tipo_Servicio: string;

  @Column()
  Direccion: string;

  @Column()
  Telefono: number;

  @Column()
  Email: string;

  @Column()
  Nombre_Responsable: string;

  @Column('date')
  Fecha_Inicio: Date;

  @Column('date')
  Fecha_Terminacion: Date;

  @Column('date')
  Fecha_Conciliacion: Date;

  @Column()
  Descripción: string;

  
}
