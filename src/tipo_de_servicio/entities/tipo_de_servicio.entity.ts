import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TipoDeServicio {
    @PrimaryColumn({type: 'varchar'})
    ID_Servicio: string;

    @Column({type: 'varchar'})
    Nombre_Servicio:  string;

}
