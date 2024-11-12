import  {Column, Entity, PrimaryColumn } from "typeorm";

@Entity ("Proveedor_Servicios_Complementarios")
export class ProveedorServiciosComplementario {
    
    @PrimaryColumn({type:'varchar'})
    ID_Contratado: String;
    @Column({type: 'varchar'})
    Dirección:String;
    @Column({type:'int'})
    Teléfono: number;
    @Column({type:'varchar'})
    Email: String;
    @Column({type:'varchar'})
    Nombre_Proveedor: String;
    @Column({type:'varchar'})
    ID_Servicio: String;
}