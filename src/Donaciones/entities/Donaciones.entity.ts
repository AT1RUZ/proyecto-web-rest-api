import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("Donaciones")
export class Donacion{
    @PrimaryColumn({type:"varchar"})
    ID_Donacion:string
    @Column({type:"double precision"})
    Monto:number
    @Column({type:"date"})
    Fecha:Date
    @Column({type:"varchar"})
    Nombre_Donante:string
    @Column({type:"varchar"})
    Email_Donante:string
    @Column({type:"varchar"})
    Telefono_Donante:string
    @Column({type:"varchar"})
    ID_Animal:string
}