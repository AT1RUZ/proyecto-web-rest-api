import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Actividad } from "./entities/Actividad.entity";
import { Repository } from "typeorm";
import { CreateAdopcion } from "../Adopciones/dto/create_adopcion.dto";
import { CreateActividad } from "./dto/create_actividad.dto";
import { UpdateActividad } from "./dto/update_actividad.dto";


@Injectable()
export class ActividadService{
    constructor(
        @InjectRepository(Actividad)
        private readonly actividadRepository: Repository<Actividad>
    ){}
    findAll():Promise<Actividad[]>{
        return  this.actividadRepository.find();
    }
    findOne(ID_Actividad:String):Promise<Actividad>{
        return  this.actividadRepository.findOneBy({ID_Actividad});
    }
    delete(ID_Actividad:String){
        return this.actividadRepository.delete({ID_Actividad});
    }
    update(update:UpdateActividad):Promise<Actividad>{
        const act:Actividad=new Actividad()
        act.Descripción_Actividad=update.Descripción_Actividad
        act.Dia=update.Dia
        act.Hora=update.Hora
        act.ID_Animal=update.ID_Animal
        act.ID_Contratado_Proveedor_Alimentos=update.ID_Contratado_Proveedor_Alimentos
        act.ID_Contratado_Proveedor_Servicios_Complementarios=update.ID_Contratado_Proveedor_Servicios_Complementarios
        act.ID_Contratado_Veterinario=update.ID_Contratado_Veterinario
        act.ID_Transporte=update.ID_Transporte
        act.Precio=update.Precio
        act.Precio_Transporte=update.Precio_Transporte
        return 
    }
    create(createActividad:CreateActividad):Promise<Actividad>{
        const act:Actividad=new Actividad()
        act.Descripción_Actividad=createActividad.Descripción_Actividad
        act.Dia=createActividad.Dia
        act.Hora=createActividad.Hora
        act.ID_Actividad=createActividad.ID_Actividad
        act.ID_Animal=createActividad.ID_Animal
        act.ID_Contratado_Proveedor_Alimentos=createActividad.ID_Contratado_Proveedor_Alimentos
        act.ID_Contratado_Proveedor_Servicios_Complementarios=createActividad.ID_Contratado_Proveedor_Servicios_Complementarios
        act.ID_Contratado_Veterinario=createActividad.ID_Contratado_Veterinario
        act.ID_Transporte=createActividad.ID_Transporte
        act.Precio=createActividad.Precio
        act.Precio_Transporte=createActividad.Precio_Transporte
        return this.actividadRepository.save(act)


    }



}