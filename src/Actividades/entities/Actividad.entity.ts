import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Actividad")
export class Actividad{
    @PrimaryColumn({type:"varchar"})
    ID_Actividad: String;
    @Column({type:"varchar"})
    Descripción_Actividad: string;
    @Column({type:"double precision"})
    Precio:number;
    Precio_Transporte:number;
    @Column({type:"varchar"})
    ID_Animal:string;
    @Column({type:"varchar"})
    ID_Contratado_Veterinario:string;
    @Column({type:"varchar"})
    ID_Contratado_Proveedor_Alimentos:string;
    @Column({type:"varchar"})
    ID_Contratado_Proveedor_Servicios_Complementarios:string;
    @Column({type:"varchar"})
    ID_Transporte:string
    @Column({type:"date"})
    Dia:Date;
    @Column({type:"time"})
    Hora:TimeRanges;
}