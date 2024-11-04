import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ListadoContratosServiciosComplementarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha_inicio_contrato: Date;

  @Column({ type: 'date' })
  fecha_terminacion_contrato: Date;

  @Column({ type: 'date' })
  fecha_conciliacion: Date;

  @Column({ type: 'varchar' })
  descripcion_contrato: string;

  @Column({ type: 'varchar' })
  tipo_servicio: string;

  @Column({ type: 'varchar' })
  provincia: string;
}