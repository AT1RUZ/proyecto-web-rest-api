import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Contratado } from '../../contratado/entities/contratado.entity';

@Entity()
export class Contrato {
  @PrimaryGeneratedColumn()
  Codigo_Contrato: string;

  @Column()
  Tipo_Contrato: string;

  @Column()
  Tipo_Servicio: string;

  @Column()
  Dirección: string;

  @Column()
  Teléfono: number;

  @Column()
  Email: string;

  @Column()
  Nombre_Responsable: string;

  @Column('date')
  Fecha_Inicio: Date;

  @Column('date')
  Fecha_Terminacion: Date;

  @Column('date')
  Fecha_Consiliacion: Date;

  @Column()
  Descripcion: string;

  
}
