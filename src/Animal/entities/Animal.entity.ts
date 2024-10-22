import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Animal")
 export class Animal{
    @PrimaryColumn({type:'varchar'})
    ID_Animal: String;
    @Column({type: 'varchar'})
    Nombre:String;
    @Column({type: 'varchar'})
    Especie:String;
    @Column({type: 'varchar'})
    Raza:String;
    @Column({type:'int'})
    Edad: number;
    @Column({type:'double precision'})
    Peso: number;
    @Column({type:'int'})
    Dias_Refugio: number;
    @Column({type:'double precision'})
    Precio_Mantenimiento: number;
    @Column({type:'double precision'})
    Precio_Adopción: number;
}