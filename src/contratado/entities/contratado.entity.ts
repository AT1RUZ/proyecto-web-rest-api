import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contrato } from '../../contrato/entities/contrato.entity';

@Entity()
export class Contratado {
  @PrimaryGeneratedColumn()
  ID_Contratado: string;
 
  @Column()
  Codigo_Contrato : string;

  @Column()
  ID_Provincia: string;
}
