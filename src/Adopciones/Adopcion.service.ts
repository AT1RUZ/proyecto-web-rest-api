import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Adopcion } from "./entities/Adopcion.entity";
import { CreateAdopcion } from "./dto/create_adopcion.dto";
import { UpdateAdopcion } from "./dto/update_adopcion.dto";


@Injectable()
export class AdopcionService{
    constructor(
        @InjectRepository(Adopcion)
        private readonly adopcionRepository: Repository<Adopcion>
    ){}
    findAll():Promise<Adopcion[]>{
        return this.adopcionRepository.find();
    }
    findOne(ID_Adopcion:String):Promise<Adopcion>{
        return this.adopcionRepository.findOneBy({ID_Adopcion})
    }
    remove(ID_Adopcion:String){
        return this.adopcionRepository.delete({ID_Adopcion})
    }
    create(createAdopcion:CreateAdopcion):Promise<Adopcion>{
        const adopcion:Adopcion=new Adopcion()
        adopcion.Costo_Adopcion=createAdopcion.Costo_Adopcion
        adopcion.Email_Adoptante=createAdopcion.Email_Adoptante
        adopcion.Fecha=createAdopcion.Fecha
        adopcion.ID_Adopcion=createAdopcion.ID_Adopcion
        adopcion.ID_Animal=createAdopcion.ID_Animal
        adopcion.Nombre_Adoptante=createAdopcion.Nombre_Adoptante
        adopcion.Telefono_Adoptante=createAdopcion.Telefono_Adoptante
        return this.adopcionRepository.save(adopcion)
    }
    update(updateAdopcion:UpdateAdopcion):Promise<Adopcion>{
        const adopcion:Adopcion=new Adopcion()
        adopcion.Costo_Adopcion=updateAdopcion.Costo_Adopcion
        adopcion.Email_Adoptante=updateAdopcion.Email_Adoptante
        adopcion.Fecha=updateAdopcion.Fecha
        adopcion.ID_Adopcion=updateAdopcion.ID_Adopcion
        adopcion.ID_Animal=updateAdopcion.ID_Animal
        adopcion.Nombre_Adoptante=updateAdopcion.Nombre_Adoptante
        adopcion.Telefono_Adoptante=updateAdopcion.Telefono_Adoptante
        return this.adopcionRepository.save(adopcion)
    }
}