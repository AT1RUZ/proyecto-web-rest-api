import  {Column, Entity, PrimaryColumn } from "typeorm";

@Entity ("Veterinario")
export class Veterinario {
    @PrimaryColumn({type:'varchar'})
    ID_Contratado: String;
    @Column({type: 'varchar'})
    Nombre_Veterinario:String;
    @Column({type: 'varchar'})
    Clínica_Veterinario:String;
    @Column({type: 'varchar'})
    Dirección_Veterinario:String;
    @Column({type:'int'})
    Teléfono_Veterinario: number;
    @Column({type:'double precision'})
    Fax_Veterinario: number;
    @Column({type:'varchar'})
    Email_Veterinario: String;
    @Column({type:'varchar'})
    Distancia_Ciudad_Veterinario: number;
    @Column({type:'varchar'})
    Modalidad_Servicio_Veterinario: String;

}
