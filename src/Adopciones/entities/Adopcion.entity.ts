import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("Adopciones")
export class Adopcion{
    @PrimaryColumn({type:"varchar"})
    ID_Adopcion:String
    @Column({type:"varchar"})
    ID_Animal:String
    @Column({type:"date"})
    Fecha:Date
    @Column({type:"double precision"})
    Costo_Adopcion:number
    @Column({type:"varchar"})
    Nombre_Adoptante:String
    @Column({type:"varchar"})
    Email_Adoptante:String
    @Column({type:"varchar"})
    Telefono_Adoptante:String
}