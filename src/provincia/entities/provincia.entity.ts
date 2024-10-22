import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Provincia {

    @PrimaryColumn({type: 'varchar'})
    ID_Provincia: string;

    @Column({type: 'varchar'})
    Nombre_Provincia: string;
}
