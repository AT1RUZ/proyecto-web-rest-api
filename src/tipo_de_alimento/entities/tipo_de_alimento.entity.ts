import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Tipo_de_Alimento")//aki se tiene que poner igual que en la tabla de la base de datos
export class TipoDeAlimento {
    @PrimaryColumn({type: 'varchar'})
    ID_Alimento: string;

    @Column({type: 'varchar'})
    Nombre_Alimento: string;

}
