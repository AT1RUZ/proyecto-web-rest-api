import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AdopcionService } from "./Adopcion.service";
import { CreateAdopcion } from "./dto/create_adopcion.dto";
import { UpdateAdopcion } from "./dto/update_adopcion.dto";


@Controller("Adopcion")
export class AdopcionController{
    constructor(private readonly adopcionService:AdopcionService){}

    @Get("")
    findAll(){
        return this.adopcionService.findAll()
    }
    @Get(":id")
    findOne(@Param("id")id:String){
        return this.adopcionService.findOne(id)
    }
    @Delete(":id")
    dele(@Param("id")id:String){
        return this.adopcionService.remove(id)
    }
    @Post()
    create(@Body()createAdopcion:CreateAdopcion){
        return this.adopcionService.create(createAdopcion)
    }
    @Put(":id")
    update(@Param("id")id:String,@Body()updateAdopcion:UpdateAdopcion){
        return this.adopcionService.update(updateAdopcion)
    }
}