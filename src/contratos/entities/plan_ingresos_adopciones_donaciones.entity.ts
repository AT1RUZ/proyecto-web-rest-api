import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlanIngresoAdopcionesDonaciones {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  nombre_animal: string;
  @Column({ type: 'varchar' })
  especie: string;
  @Column({ type: 'varchar' })
  raza: string;
  @Column({ type: 'int' })
  edad: number;
  @Column({ type: 'double precision' })
  costo_total_mantenimiento: number;
  @Column({ type: 'double precision' })
  precio_total_adopcion: number;
  @Column({ type: 'double precision' })
  donaciones_recibidas: number;
  @Column({ type: 'double precision' })
  monto_total_ingresos: number;
}
