import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ListadoContratosProveedoresAlimentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre_proveedor: string;

  @Column({ type: 'varchar' })
  tipo_alimento: string;

  @Column({ type: 'varchar' })
  id_provincia: string;

  @Column({ type: 'varchar' })
  direccion: string;

  @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column({ type: 'date' })
  fecha_terminacion: Date;

  @Column({ type: 'date' })
  fecha_conciliacion: Date;

  @Column({ type: 'varchar' })
  descripcion: string;
}
