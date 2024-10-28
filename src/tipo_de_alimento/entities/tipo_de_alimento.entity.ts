import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TipoDeAlimento {
    @PrimaryColumn({type: 'varchar'})
    ID_Alimento: string;

    @Column({type: 'varchar'})
    Nombre_Alimento: string;

}
