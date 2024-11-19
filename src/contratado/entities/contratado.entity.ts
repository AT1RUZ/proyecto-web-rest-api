import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Contrato } from '../../contrato/entities/contrato.entity';

@Entity('Contratado')
export class Contratado {
  @PrimaryColumn()
  ID_Contratado: string;
 
  @Column()
  Código_Contrato : string;

  @Column()
  ID_Provincia: string;
}
