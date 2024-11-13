import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProgramaActividadesAnimal {
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
  peso: number;

  @Column({ type: 'int' })
  dias_refugio: number;

  @Column({ type: 'date' })
  dia: Date;

  @Column({ type: 'time without time zone' })
  hora: string;

  @Column({ type: 'varchar' })
  descripcion_actividad: string;

  @Column({ type: 'double precision' })
  precio_actividad: number;

  @Column({ type: 'varchar' })
  nombre_veterinario: string;

  @Column({ type: 'varchar' })
  tipo_alimento: string;

  @Column({ type: 'double precision' })
  precio_total_cuidado_veterinario: number;

  @Column({ type: 'double precision' })
  precio_transporte: number;

  @Column({ type: 'double precision' })
  precio_total_mantenimiento: number;
}
