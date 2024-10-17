import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TipoDeAlimento {
    @PrimaryColumn({type: 'varchar'})
    ID_Alimento: string;
}
