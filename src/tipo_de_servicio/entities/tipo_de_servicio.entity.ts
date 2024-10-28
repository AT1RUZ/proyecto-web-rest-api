import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tipo_de_servicio")//aki se tiene que poner igual que en la tabla de la base de datos
export class TipoDeServicio {
    @PrimaryColumn({type: 'varchar'})
    ID_Servicio: string;

    @Column({type: 'varchar'})
    Nombre_Servicio:  string;

}
