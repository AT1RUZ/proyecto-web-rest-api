import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Donacion } from "./entities/Donaciones.entity";
import { Repository } from "typeorm";
import { CreateDonacion } from "./dto/create_donacion.dto";
import { UpdateDonacion } from "./dto/update_donacion.dto";

@Injectable()
export class DonacionService{
    constructor(
        @InjectRepository(Donacion)
        private readonly donacionRepository:Repository<Donacion>
    ){}

    async create(createDonacion:CreateDonacion):Promise<Donacion>{
        const donacion: Donacion=new Donacion()
        donacion.ID_Donacion=createDonacion.ID_Donacion
        donacion.Monto=createDonacion.Monto
        donacion.Fecha=createDonacion.Fecha
        donacion.ID_Animal=createDonacion.ID_Animal
        donacion.Nombre_Donante=createDonacion.Nombre_Donante
        donacion.Telefono_Donante=createDonacion.Telefono_Donante
        donacion.Email_Donante=createDonacion.Email_Donante

        return this.donacionRepository.save(donacion)
    }
    update(id:String,updateDonacion:UpdateDonacion):Promise<Donacion>{
        const updt:Donacion=new Donacion()

        updt.ID_Donacion=updateDonacion.ID_Donacion
        updt.Monto=updateDonacion.Monto
        updt.Fecha=updateDonacion.Fecha
        updt.ID_Animal=updateDonacion.ID_Animal
        updt.Nombre_Donante=updateDonacion.Nombre_Donante
        updt.Telefono_Donante=updateDonacion.Telefono_Donante
        updt.Email_Donante=updateDonacion.Email_Donante 

        return this.donacionRepository.save(updt)
    }
    remove(ID_Donacion:string){
        return this.donacionRepository.delete(ID_Donacion)
    }
    findOne(ID_Donacion:string):Promise<Donacion>{
        return this.donacionRepository.findOneBy({ID_Donacion});
    }
    findAll():Promise<Donacion[]>{
        return this.donacionRepository.find()
    }
}